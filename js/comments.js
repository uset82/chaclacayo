// js/comments.js
// Visitor forum: list + submit + realtime new comments.
// Backed by the `public.comments` Supabase table (open insert, RLS rate-limited).

import { supabase } from "./supabase-client.js";

const PAGE_SIZE = 10;

const listEl    = document.getElementById("comments-list");
const emptyEl   = document.getElementById("comments-empty");
const countEl   = document.getElementById("comments-count");
const formEl    = document.getElementById("comments-form");
const nameEl    = document.getElementById("cm-name");
const emailEl   = document.getElementById("cm-email");
const messageEl = document.getElementById("cm-message");
const submitBtn = formEl?.querySelector('button[type="submit"]');
const loadMoreBtn = document.getElementById("comments-load-more");

let parentComments = [];
let totalParents = 0;
let activeParentId = null;
let activeParentName = "";
let isLoading = false;

if (!listEl || !formEl) {
  // Section not present on this page — bail out silently.
  // (allows graceful loading on future pages without this widget)
} else {
  init();
}

// --------------------------------------------------------------------
// i18n helper — pulls strings out of window.translations populated by i18n.js
// --------------------------------------------------------------------
function t(key, fallback = "") {
  const lang = (document.documentElement.lang || "es").slice(0, 2);
  const dict = window.translations?.[lang] ?? {};
  return dict[key] || fallback || key;
}

function currentLang() {
  return (document.documentElement.lang || "es").slice(0, 2) === "en" ? "en" : "es";
}

// --------------------------------------------------------------------
// Rendering
// --------------------------------------------------------------------
function initials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("") || "·";
}

function relativeTime(iso) {
  const lang = currentLang();
  const d = new Date(iso);
  const diff = (Date.now() - d.getTime()) / 1000;
  const rtf = new Intl.RelativeTimeFormat(lang === "en" ? "en" : "es", { numeric: "auto" });
  if (diff < 60)        return rtf.format(-Math.round(diff),       "second");
  if (diff < 3600)      return rtf.format(-Math.round(diff / 60),  "minute");
  if (diff < 86_400)    return rtf.format(-Math.round(diff / 3600), "hour");
  if (diff < 2_592_000) return rtf.format(-Math.round(diff / 86_400), "day");
  return d.toLocaleDateString(lang === "en" ? "en-US" : "es-PE");
}

function renderComment(c, { isNew = false, isReply = false } = {}) {
  const li = document.createElement("li");
  li.className = (isReply ? "comment comment--reply" : "comment-thread")
    + (isNew ? " comment--new" : "")
    + (c.is_pending ? " comment--pending" : "");
  li.dataset.id = c.id;

  const card = isReply ? li : document.createElement("article");
  if (!isReply) card.className = "comment";

  // Avatar
  const avatar = document.createElement("div");
  avatar.className = "comment__avatar";
  avatar.textContent = initials(c.name);
  avatar.setAttribute("aria-hidden", "true");

  // Body
  const body = document.createElement("div");
  body.className = "comment__body";

  const head = document.createElement("div");
  head.className = "comment__head";
  const nameSpan = document.createElement("span");
  nameSpan.className = "comment__name";
  nameSpan.textContent = c.name; // textContent — XSS safe
  const timeSpan = document.createElement("time");
  timeSpan.className = "comment__time";
  timeSpan.dateTime = c.created_at;
  timeSpan.textContent = relativeTime(c.created_at);
  head.append(nameSpan, timeSpan);

  const msg = document.createElement("p");
  msg.className = "comment__message";
  msg.textContent = c.message; // textContent — XSS safe

  body.append(head, msg);
  if (!isReply) {
    const actions = document.createElement("div");
    actions.className = "comment__actions";
    const replyBtn = document.createElement("button");
    replyBtn.type = "button";
    replyBtn.className = "comment__reply";
    replyBtn.dataset.replyTo = c.id;
    replyBtn.dataset.replyName = c.name;
    replyBtn.textContent = t("comments_reply");
    actions.appendChild(replyBtn);
    body.appendChild(actions);
  }

  card.append(avatar, body);

  if (isReply) return li;

  li.appendChild(card);
  const replies = document.createElement("ul");
  replies.className = "comment__replies";
  replies.dataset.parentId = c.id;
  for (const reply of c.replies ?? []) {
    replies.appendChild(renderComment(reply, { isReply: true }));
  }
  li.appendChild(replies);
  return li;
}

function updateCount(n) {
  if (!countEl) return;
  if (n === 0) {
    countEl.textContent = t("comments_empty_count");
  } else if (n === 1) {
    countEl.textContent = t("comments_count_one");
  } else {
    const tpl = t("comments_count_many");
    countEl.textContent = tpl.replace("{n}", String(n));
  }
}

// --------------------------------------------------------------------
// Data
// --------------------------------------------------------------------
async function loadComments() {
  if (isLoading) return;
  isLoading = true;
  countEl && (countEl.textContent = t("comments_loading"));
  loadMoreBtn && (loadMoreBtn.disabled = true);

  const { data, error, count } = await supabase
    .from("comments")
    .select("id, parent_id, name, message, lang, created_at", { count: "exact" })
    .eq("is_visible", true)
    .is("parent_id", null)
    .order("created_at", { ascending: false })
    .range(parentComments.length, parentComments.length + PAGE_SIZE - 1);

  if (error) {
    console.error("[comments] load failed", error);
    countEl && (countEl.textContent = t("comments_load_error"));
    loadMoreBtn && (loadMoreBtn.disabled = false);
    isLoading = false;
    return;
  }

  totalParents = count ?? parentComments.length + (data?.length ?? 0);
  const parents = (data ?? []).map((c) => ({ ...c, replies: [] }));
  const parentIds = parents.map((c) => c.id);

  if (parentIds.length > 0) {
    const { data: replies, error: repliesError } = await supabase
      .from("comments")
      .select("id, parent_id, name, message, lang, created_at")
      .eq("is_visible", true)
      .in("parent_id", parentIds)
      .order("created_at", { ascending: true });

    if (repliesError) {
      console.warn("[comments] replies load failed", repliesError);
    } else {
      for (const reply of replies ?? []) {
        const parent = parents.find((c) => c.id === reply.parent_id);
        parent?.replies.push(reply);
      }
    }
  }

  parentComments = [...parentComments, ...parents];
  renderComments();
  loadMoreBtn && (loadMoreBtn.disabled = false);
  isLoading = false;
}

function renderComments() {
  listEl.replaceChildren();
  if (parentComments.length === 0) {
    emptyEl && (emptyEl.hidden = false);
    updateCount(0);
    loadMoreBtn && (loadMoreBtn.hidden = true);
    return;
  }
  emptyEl && (emptyEl.hidden = true);
  for (const c of parentComments) listEl.appendChild(renderComment(c));
  updateCount(totalParents || parentComments.length);
  if (loadMoreBtn) {
    loadMoreBtn.hidden = parentComments.length >= totalParents;
    loadMoreBtn.textContent = t("comments_load_more");
  }
}

function prependComment(c) {
  // Avoid duplicates from realtime echo of our own insert
  if (listEl.querySelector(`[data-id="${c.id}"]`)) return;
  emptyEl && (emptyEl.hidden = true);
  const next = { ...c, replies: [] };
  parentComments.unshift(next);
  totalParents += 1;
  const node = renderComment(next, { isNew: true });
  listEl.prepend(node);
  updateCount(totalParents);
}

function appendReply(c, { isNew = false } = {}) {
  if (listEl.querySelector(`[data-id="${c.id}"]`)) return;
  const parent = parentComments.find((item) => item.id === c.parent_id);
  if (parent) parent.replies = [...(parent.replies ?? []), c];
  const repliesEl = listEl.querySelector(`.comment__replies[data-parent-id="${c.parent_id}"]`);
  if (repliesEl) repliesEl.appendChild(renderComment(c, { isNew, isReply: true }));
}

function removeOptimisticComment(id, parentId) {
  listEl.querySelector(`[data-id="${id}"]`)?.remove();
  if (parentId) {
    const parent = parentComments.find((item) => item.id === parentId);
    if (parent) parent.replies = (parent.replies ?? []).filter((reply) => reply.id !== id);
  } else {
    parentComments = parentComments.filter((item) => item.id !== id);
    totalParents = Math.max(0, totalParents - 1);
    if (parentComments.length === 0) renderComments();
    else updateCount(totalParents);
  }
}

function replaceOptimisticComment(tempId, row) {
  if (listEl.querySelector(`[data-id="${row.id}"]`)) {
    removeOptimisticComment(tempId, row.parent_id);
    return;
  }

  const oldNode = listEl.querySelector(`[data-id="${tempId}"]`);
  if (row.parent_id) {
    const parent = parentComments.find((item) => item.id === row.parent_id);
    if (parent) {
      parent.replies = (parent.replies ?? []).map((reply) => reply.id === tempId ? row : reply);
    }
    oldNode?.replaceWith(renderComment(row, { isNew: true, isReply: true }));
    return;
  }

  const next = { ...row, replies: [] };
  parentComments = parentComments.map((item) => item.id === tempId ? next : item);
  oldNode?.replaceWith(renderComment(next, { isNew: true }));
  updateCount(totalParents);
}

function setActiveReply(parentId, parentName) {
  activeParentId = parentId;
  activeParentName = parentName;
  renderReplyStatus();
  messageEl.focus();
  formEl.scrollIntoView({ behavior: "smooth", block: "center" });
}

function clearActiveReply() {
  activeParentId = null;
  activeParentName = "";
  renderReplyStatus();
}

function renderReplyStatus() {
  let status = formEl.querySelector(".comments-form__replying");
  if (!activeParentId) {
    status?.remove();
    messageEl.setAttribute("aria-describedby", "comments-form-error comments-form-hint");
    return;
  }

  if (!status) {
    status = document.createElement("p");
    status.className = "comments-form__replying";
    status.id = "comments-replying";
    formEl.insertBefore(status, formEl.querySelector(".comments-form__actions"));
  }
  messageEl.setAttribute("aria-describedby", "comments-form-error comments-form-hint comments-replying");
  status.replaceChildren();
  const text = document.createElement("span");
  text.textContent = t("comments_replying_to").replace("{name}", activeParentName);
  const cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = t("comments_cancel_reply");
  cancel.addEventListener("click", clearActiveReply);
  status.append(text, cancel);
}

// --------------------------------------------------------------------
// Submit
// --------------------------------------------------------------------
let lastSubmitAt = 0;

export async function submitComment({ name, email = null, message, parent_id = null }) {
  return supabase
    .from("comments")
    .insert({
      parent_id,
      name,
      email,
      message,
      lang: currentLang(),
      ip_hash: null,           // filled server-side from request IP by the insert trigger
      user_agent: navigator.userAgent.slice(0, 200),
    })
    .select("id, parent_id, name, message, lang, created_at")
    .single();
}

async function onSubmit(e) {
  e.preventDefault();

  // Honeypot
  const hp = formEl.querySelector('input[name="hp"]');
  if (hp && hp.value !== "") return; // bot

  // Soft client rate-limit (server enforces 30s real limit)
  const now = Date.now();
  if (now - lastSubmitAt < 30_000) {
    showFormError(t("comments_rate_local"));
    return;
  }

  const name    = nameEl.value.trim();
  const email   = emailEl.value.trim() || null;
  const message = messageEl.value.trim();

  if (name.length < 2 || message.length < 5) {
    showFormError(t("comments_validation"));
    return;
  }

  setLoading(true);
  showFormError("");

  const parentId = activeParentId;
  const tempId = `pending-${crypto.randomUUID?.() ?? Date.now()}`;
  const optimistic = {
    id: tempId,
    parent_id: parentId,
    name,
    message,
    lang: currentLang(),
    created_at: new Date().toISOString(),
    is_pending: true,
  };

  if (parentId) appendReply(optimistic, { isNew: true });
  else prependComment(optimistic);

  const { data, error } = await submitComment({ name, email, message, parent_id: parentId });

  setLoading(false);

  if (error) {
    removeOptimisticComment(tempId, parentId);
    console.error("[comments] insert failed", error);
    const isRateLimit = error.message?.includes("rate_limit_exceeded");
    showFormError(
      isRateLimit
        ? t("comments_rate_server")
        : t("comments_submit_error"),
    );
    return;
  }

  lastSubmitAt = now;
  formEl.reset();
  if (data) replaceOptimisticComment(tempId, data);
  clearActiveReply();
  showSuccess(t("comments_submit_ok"));
}

function showFormError(msg) {
  let el = formEl.querySelector(".comments-form__error");
  if (!el) {
    el = document.createElement("p");
    el.className = "comments-form__error";
    el.id = "comments-form-error";
    el.setAttribute("role", "alert");
    formEl.appendChild(el);
  }
  el.textContent = msg;
  el.hidden = !msg;
  nameEl.setAttribute("aria-invalid", msg ? "true" : "false");
  messageEl.setAttribute("aria-invalid", msg ? "true" : "false");
}

function showSuccess(msg) {
  // Reuse the existing toast if present
  const toast = document.getElementById("toast");
  if (toast) {
    toast.textContent = msg;
    toast.className = "toast show";
    setTimeout(() => (toast.className = "toast"), 3000);
  }
}

function setLoading(loading) {
  if (!submitBtn) return;
  submitBtn.disabled = loading;
  submitBtn.dataset.originalText ??= submitBtn.textContent;
  submitBtn.textContent = loading
    ? t("comments_sending")
    : submitBtn.dataset.originalText;
}

// --------------------------------------------------------------------
// Realtime
// --------------------------------------------------------------------
function subscribeRealtime() {
  supabase
    .channel("public:comments")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "comments" },
      (payload) => {
        const row = payload.new;
        if (!row?.is_visible) return;
        if (row.parent_id) appendReply(row, { isNew: true });
        else prependComment(row);
      },
    )
    .subscribe((status) => {
      if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
        console.warn("[comments] realtime status:", status);
      }
    });
}

// --------------------------------------------------------------------
// Boot
// --------------------------------------------------------------------
function init() {
  formEl.addEventListener("submit", onSubmit);
  listEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-reply-to]");
    if (!btn) return;
    setActiveReply(btn.dataset.replyTo, btn.dataset.replyName || "");
  });
  loadMoreBtn?.addEventListener("click", loadComments);
  loadComments();
  subscribeRealtime();

  // Refresh relative timestamps on language toggle
  document.addEventListener("languageChanged", () => {
    renderComments();
    renderReplyStatus();
  });
}
