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
