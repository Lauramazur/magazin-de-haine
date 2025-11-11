window.addEventListener('load', () => {
  const carousel = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let counter = 0;
  let size = images[0].clientWidth;
  function updateCarousel() {
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  window.addEventListener('resize', () => {
    size = images[0].clientWidth;
    updateCarousel();
  });
  nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= images.length) counter = 0;
    updateCarousel();
  });
  prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) counter = images.length - 1;
    updateCarousel();
  });
  setInterval(() => {
    counter++;
    if (counter >= images.length) counter = 0;
    updateCarousel();
  }, 4000);
});
function afiseazaColectia() {
  document.getElementById('colectia-toamna').style.display = 'block';
  document.getElementById('colectia-toamna').scrollIntoView({behavior: "smooth"});
}
const themeButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

// --- theme.js ---
document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-toggle");

  // verifică tema salvată
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeButton) themeButton.textContent = "☀️";
  }

  // la apăsarea butonului
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const dark = document.body.classList.contains("dark-theme");
      themeButton.textContent = dark ? "☀️" : "🌙";
      localStorage.setItem("theme", dark ? "dark" : "light");
    });
  }
});
