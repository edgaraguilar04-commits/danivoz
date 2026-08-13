// =========================================================
// DANI VOZ — script.js
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menú móvil ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Widget flotante de WhatsApp ---------- */
  const waFab = document.getElementById('waFab');
  const waPanel = document.getElementById('waPanel');

  if (waFab && waPanel) {
    waFab.addEventListener('click', () => {
      const isOpen = waPanel.classList.toggle('open');
      waFab.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!waPanel.contains(e.target) && !waFab.contains(e.target)) {
        waPanel.classList.remove('open');
        waFab.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Formulario de contacto -> WhatsApp ---------- */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const motivo = document.getElementById('motivo').value;
      const mensaje = document.getElementById('mensaje').value.trim();

      let texto = `Hola Daniela, mi nombre es ${nombre || '—'}.\n`;
      texto += `Motivo de contacto: ${motivo}.\n`;
      if (mensaje) texto += `Mensaje: ${mensaje}`;

      const url = `https://wa.me/56999210950?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank', 'noopener');
    });
  }

  /* ---------- Animación al hacer scroll (reveal) ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

});
