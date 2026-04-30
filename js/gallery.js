// js/gallery.js
// Handles the image carousel, thumbnails, and lightbox for the Gallery section

document.addEventListener('DOMContentLoaded', () => {
  const images = [
    './FOTOS/WhatsApp Image 2026-04-27 at 15.54.13.jpeg',
    './FOTOS/WhatsApp Image 2026-04-27 at 15.54.49.jpeg',
    './FOTOS/WhatsApp Image 2026-04-27 at 15.55.14.jpeg',
    './FOTOS/WhatsApp Image 2026-04-27 at 15.55.28.jpeg',
    './FOTOS/WhatsApp Image 2026-04-27 at 15.55.46.jpeg'
  ];

  let currentIndex = 0;

  const mainImg = document.getElementById('gallery-main-img');
  const thumbnailsContainer = document.getElementById('gallery-thumbnails');
  const prevBtn = document.querySelector('.gallery-nav.prev');
  const nextBtn = document.querySelector('.gallery-nav.next');
  const expandBtn = document.querySelector('.gallery-expand');
  
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');

  // Initialize Thumbnails
  images.forEach((src, index) => {
    const thumb = document.createElement('div');
    thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
    thumb.innerHTML = `<img src="${src}" alt="Thumbnail ${index + 1}" loading="lazy">`;
    thumb.addEventListener('click', () => goToImage(index));
    thumbnailsContainer.appendChild(thumb);
  });

  const thumbnailElements = document.querySelectorAll('.thumbnail');

  function updateGallery() {
    mainImg.src = images[currentIndex];
    
    // Update active thumbnail
    thumbnailElements.forEach((thumb, index) => {
      if (index === currentIndex) {
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  function goToImage(index) {
    currentIndex = index;
    updateGallery();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  }

  // Event Listeners
  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);

  // Lightbox
  expandBtn.addEventListener('click', () => {
    lightboxImg.src = images[currentIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });

  mainImg.addEventListener('click', () => {
    lightboxImg.src = images[currentIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'Escape') {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
      if (e.key === 'ArrowRight') {
        nextImage();
        lightboxImg.src = images[currentIndex];
      }
      if (e.key === 'ArrowLeft') {
        prevImage();
        lightboxImg.src = images[currentIndex];
      }
    }
  });

  // Basic Swipe Support for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  mainImg.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  mainImg.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextImage();
    if (touchEndX > touchStartX + 50) prevImage();
  }
});
