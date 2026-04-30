// js/main.js
// Core logic and animations for Chaclacayo Landing Page

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. IntersectionObserver for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // 2. Header scroll effect
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', expanded);
      menuToggle.textContent = expanded ? '✕' : '☰';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });
  }

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item__q');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      const wasOpen = parent.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('open');
      });

      if (!wasOpen) {
        parent.classList.add('open');
      }
    });
  });

  // 4b. Smooth scroll for in-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 5. ROI Calculator
  const rateInput = document.getElementById('roi-rate');
  const occInput = document.getElementById('roi-occ');
  const monthsInput = document.getElementById('roi-months');
  const priceInput = document.getElementById('roi-price');
  
  const outIncome = document.getElementById('roi-out-income');
  const outRoi = document.getElementById('roi-out-roi');
  const outPayback = document.getElementById('roi-out-payback');

  function calculateROI() {
    if (!rateInput || !occInput || !monthsInput || !priceInput) return;

    // Modelo multi-unidad: renta_mensual_por_habitación × ocupación × habitaciones_rentadas × 12
    const monthlyRent = parseFloat(rateInput.value) || 0;
    const occ = (parseFloat(occInput.value) || 0) / 100;
    const rooms = parseFloat(monthsInput.value) || 0;
    const price = parseFloat(priceInput.value) || 1;

    const annualIncome = monthlyRent * occ * rooms * 12;
    const roi = (annualIncome / price) * 100;
    const payback = annualIncome > 0 ? price / annualIncome : 0;

    outIncome.textContent = `$${Math.round(annualIncome).toLocaleString()}`;
    outRoi.textContent = `${roi.toFixed(1)}%`;
    outPayback.textContent = annualIncome > 0 ? `${payback.toFixed(1)}` : '—';
  }

  [rateInput, occInput, monthsInput, priceInput].forEach(input => {
    if(input) input.addEventListener('input', calculateROI);
  });
  
  // Initial calculation
  calculateROI();

  // 6. Toast Notification
  const toast = document.getElementById('toast');
  function showToast(message, isError = false) {
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast show ${isError ? 'error' : ''}`;
    setTimeout(() => {
      toast.className = 'toast';
    }, 3000);
  }

  // 7. Forms Handling (Client-side validation & fake submit)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Honeypot check
      const hp = contactForm.querySelector('input[name="hp"]');
      if (hp && hp.value !== '') return; // Bot detected

      const name = contactForm.querySelector('#cf-name').value;
      const email = contactForm.querySelector('#cf-email').value;

      if (!name || !email) {
        showToast('Por favor completa los campos requeridos.', true);
        return;
      }

      // Simulate sending
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('Mensaje enviado. Carlos te contactará pronto.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
      }, 1500);
    });
  }

  const leadMagnetForm = document.getElementById('lead-magnet-form');
  if (leadMagnetForm) {
    leadMagnetForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const hp = leadMagnetForm.querySelector('input[name="hp"]');
      if (hp && hp.value !== '') return; // Bot detected

      const submitBtn = leadMagnetForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('Dossier enviado a tu correo.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        leadMagnetForm.reset();
      }, 1500);
    });
  }
});
