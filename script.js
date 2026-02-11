// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Update active menu on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.nav-link');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      sections.forEach(s => s.classList.remove('current'));
      section.classList.add('current');

      const id = section.getAttribute('id');
      links.forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Intersection Observer for Animations
function initAnimations() {
  const observerElements = document.querySelectorAll('[data-animate]');
  const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationType = entry.target.getAttribute('data-animate');
        if (animationType) entry.target.classList.add(animationType);

        if (entry.target.classList.contains('skill-card')) {
          const cards = Array.from(document.querySelectorAll('.skill-card'));
          const index = cards.indexOf(entry.target);
          entry.target.classList.add(`animate-stagger-${index % 6 + 1}`);
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observerElements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initAnimations);
// ===== VYLEPŠENÝ PORTFOLIO FILTER =====

function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Aktivní tlačítko
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      // Počítadlo pro stagger efekt
      let visibleIndex = 0;

      portfolioCards.forEach((card, index) => {
        const cardCategory = card.getAttribute('data-category');
        const shouldShow = filterValue === 'all' || cardCategory === filterValue;

        if (shouldShow) {
          // Zobraz kartu s postupným zpožděním
          card.style.display = 'block';

          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, visibleIndex * 100); // Každá karta o 100ms později

          visibleIndex++;
        } else {
          // Skryj kartu
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';

          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initPortfolioFilter);
// Spočítej viditelné projekty
const visibleCards = document.querySelectorAll('.portfolio-card[style*="display: block"], .portfolio-card:not([style*="display: none"])');
document.getElementById('project-count').textContent = visibleCards.length;
// Modal pro detail projektu
const modal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');

// Kliknutí na kartu otevře modal
document.querySelectorAll('.portfolio-card').forEach(card => {
  card.addEventListener('click', () => {
    // Získej data z karty
    const img = card.querySelector('img').src;
    const title = card.querySelector('.portfolio-title').textContent;
    const description = card.querySelector('.portfolio-description').textContent;

    // Naplň modal
    document.getElementById('modal-image').src = img;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;

    // Zobraz modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Zablokuj scroll
  });
});

// Zavření modalu
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Obnov scroll
}

// Zavři modal při ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// ===== MAPA =====
function initMap() {
  if (!document.getElementById('map')) return;

  // Souřadnice Uherského Hradiště
  const uhCoords = [49.0697, 17.4594]; // Uherské Hradiště

  // Inicializace mapy
  const map = L.map('map').setView(uhCoords, 13);

  // Dlaždice z OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Marker
  L.marker(uhCoords)
    .addTo(map)
    .bindPopup('<strong>Uherské Hradiště</strong><br>Moje působiště')
    .openPopup();
}

document.addEventListener('DOMContentLoaded', initMap);