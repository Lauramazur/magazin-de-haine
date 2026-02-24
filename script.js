
function afiseazaColectia() {
  const sectiune = document.getElementById('colectia-toamna');
  if (!sectiune) return;

  sectiune.style.display = 'block';
  sectiune.scrollIntoView({ behavior: "smooth" });
}
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
  const colectieContainer = document.getElementById("card-container");

  if (colectieContainer && data.imageLinks) {
    data.imageLinks.forEach(prod => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${prod.src}">
        <h3>${prod.name}</h3>
        <p><strong>Preț:</strong> ${prod.price}</p>
      `;

      colectieContainer.appendChild(card);
    });
  }
  const imgContainer = document.querySelector(".acasa-images");

  if (imgContainer && data.acasaImages) {
    data.acasaImages.forEach(imgData => {
      const img = document.createElement("img");
      img.src = imgData.src;
      img.alt = imgData.alt;
      img.className = "poza-acasa";

      imgContainer.appendChild(img);
    });
  }
  const produseContainer = document.getElementById("produse-container");

  if (produseContainer && data.produsePage) {
    data.produsePage.forEach(prod => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${prod.src}">
        <h3>${prod.name}</h3>
        <p><strong>Preț:</strong> ${prod.price}</p>
      `;

      produseContainer.appendChild(card);
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("form-sugestie");

  if (form) {
    form.addEventListener("submit", function(e){
      e.preventDefault();

      const nume = document.getElementById("nume-produs").value;
      const img = document.getElementById("imagine-produs").value;

      const sugestie = { nume, img };

      let listaSugestii = JSON.parse(localStorage.getItem("sugestii")) || [];
      listaSugestii.push(sugestie);
      localStorage.setItem("sugestii", JSON.stringify(listaSugestii));

      document.getElementById("mesaj-confirmare").textContent =
        "Mulțumim! Sugestia ta a fost trimisă!";

      form.reset();

      afiseazaSugestii(); // reafișează imediat
    });
  }

  afiseazaSugestii(); 

});


function afiseazaSugestii() {
  const lista = JSON.parse(localStorage.getItem("sugestii")) || [];
  const container = document.getElementById("lista-sugestii");
  if (!container) return;

  container.innerHTML = "";

  lista.forEach(s => {
    const div = document.createElement("div");
    div.className = "sugestii";

    div.innerHTML = `
      <img src="${s.img}" alt="${s.nume}" class="sugestie-imagine">
      <strong>${s.nume}</strong>
    `;

    container.appendChild(div);
  });
}