// ===== CARUSEL =====
window.addEventListener('load', () => {
  const carousel = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // 👉 dacă nu există carusel pe pagină, ieșim
  if (!carousel || images.length === 0 || !prevBtn || !nextBtn) return;

  let counter = 0;
  let size = images[0].clientWidth;

  function updateCarousel() {
    carousel.style.transform = `translateX(${-size * counter}px)`;
  }

  window.addEventListener('resize', () => {
    size = images[0].clientWidth;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % images.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + images.length) % images.length;
    updateCarousel();
  });

  setInterval(() => {
    counter = (counter + 1) % images.length;
    updateCarousel();
  }, 4000);
});


// ===== COLECȚIE =====
function afiseazaColectia() {
  const sectiune = document.getElementById('colectia-toamna');
  if (!sectiune) return;

  sectiune.style.display = 'block';
  sectiune.scrollIntoView({ behavior: "smooth" });
}
// ===== DARK MODE =====
document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-toggle");
  if (!themeButton) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.textContent = "☀️";
    console.log("Tema încărcată: DARK");
  } else {
    themeButton.textContent = "🌙";
    console.log("Tema încărcată: LIGHT");
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const dark = document.body.classList.contains("dark-theme");

    themeButton.textContent = dark ? "☀️" : "🌙";
    localStorage.setItem("theme", dark ? "dark" : "light");

    console.log(dark ? "Tema DARK activată" : "Tema LIGHT activată");
  });
});
