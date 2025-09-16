// Small lightbox and contact form handler
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.dataset.full;
    lightboxImg.src = src;
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

document.querySelector('.lightbox-close').addEventListener('click', () => {
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
});
lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) {
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  }
});

// Contact form (defaults to mailto fallback)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const subject = encodeURIComponent('Website inquiry from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>');
  window.location.href = `mailto:tess@example.com?subject=${subject}&body=${body}`;
});