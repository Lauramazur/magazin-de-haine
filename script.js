
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
fetch("data.json")
  .then(res => res.json())
  .then(data => render(data));

function render(data) {
  const container = document.getElementById("card-container");

  data.imageLinks.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${prod.src}">
      <h3>${prod.name}</h3>
      <p><strong>Preț:</strong> ${prod.price}</p>
    `;

    container.appendChild(card);
  });
}


