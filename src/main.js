/* src/main.js */

/* FADE-IN ON SCROLL */
const fadeInElements = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Unobserve if you only want to animate once
      fadeInObserver.unobserve(entry.target);
    }
  });
});
fadeInElements.forEach((el) => fadeInObserver.observe(el));

/* SIMPLE SEARCH SYSTEM (Index + Shop) */
const searchInput = document.getElementById('searchInput');
const featuredGrid = document.getElementById('featuredGrid');
const shopSearchInput = document.getElementById('shopSearchInput');
const shopGrid = document.getElementById('shopGrid');

if (searchInput && featuredGrid) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const items = featuredGrid.querySelectorAll('.product-grid__item');
    items.forEach((item) => {
      const text = item.innerText.toLowerCase();
      item.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
}

if (shopSearchInput && shopGrid) {
  shopSearchInput.addEventListener('input', () => {
    const query = shopSearchInput.value.toLowerCase();
    const items = shopGrid.querySelectorAll('.product-grid__item');
    items.forEach((item) => {
      const text = item.innerText.toLowerCase();
      item.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
}

/* SIMPLE FILTER SYSTEM (Index + Shop) */
const featuredFilter = document.getElementById('featuredFilter');
if (featuredFilter && featuredGrid) {
  featuredFilter.addEventListener('change', () => {
    const val = featuredFilter.value;
    const items = featuredGrid.querySelectorAll('.product-grid__item');
    items.forEach((item) => {
      const cat = item.getAttribute('data-category');
      if (val === 'all' || cat === val) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

const shopFilter = document.getElementById('shopFilter');
if (shopFilter && shopGrid) {
  shopFilter.addEventListener('change', () => {
    const val = shopFilter.value;
    const items = shopGrid.querySelectorAll('.product-grid__item');
    items.forEach((item) => {
      const cat = item.getAttribute('data-category');
      if (val === 'all' || cat === val) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}