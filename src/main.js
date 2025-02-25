/* src/main.js */

/* Fade-In on Scroll */
const fadeInElems = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Remove unobserve if you want repeated fade on each scroll
      // fadeInObserver.unobserve(entry.target);
    }
  });
});
fadeInElems.forEach((el) => fadeInObserver.observe(el));

/* Scroll to Top Button */
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* Simple Search (Index) */
const searchInput = document.getElementById('searchInput');
const featuredProducts = document.querySelectorAll('.featured .product-card');
if (searchInput && featuredProducts) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    featuredProducts.forEach((card) => {
      const name = card.getAttribute('data-name') || '';
      card.style.display = name.toLowerCase().includes(query) ? 'block' : 'none';
    });
  });
}

/* Simple Search (Shop) */
const shopSearchInput = document.getElementById('shopSearchInput');
const shopItems = document.querySelectorAll('#shopGrid .product-grid__item');
if (shopSearchInput && shopItems) {
  shopSearchInput.addEventListener('input', () => {
    const query = shopSearchInput.value.toLowerCase();
    shopItems.forEach((item) => {
      const name = item.getAttribute('data-name') || '';
      item.style.display = name.toLowerCase().includes(query) ? 'block' : 'none';
    });
  });
}