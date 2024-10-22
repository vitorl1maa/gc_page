const carousel = document.getElementById("carouselContent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const showProductsBtn = document.getElementById("showProducts");
const menu = document.getElementById("nav-menu");
const menuToggle = document.getElementById("menu-toggle");
const navItems = document.querySelectorAll(".nav-item");

let scrollStep = 200; // Tamanho de cada item no carrossel

// Botões de navegação
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
  checkButtons();
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
  checkButtons();
});

// Função para mostrar todos os produtos ao clicar no botão "Ver mais"
showProductsBtn.addEventListener("click", () => {
  carousel.classList.toggle("overflow-hidden");
  carousel.classList.toggle("flex-wrap");
  carousel.classList.toggle("block");

  if (showProductsBtn.innerText === "Ver mais produtos") {
    showProductsBtn.innerText = "Ver menos produtos";
    showProductsBtn.classList.add("bg-secondary", "text-white");
    showProductsBtn.classList.remove("text-primary");

    disableArrows();
    carousel.classList.add("justify-center"); // Centraliza os itens quando expandido
  } else {
    showProductsBtn.innerText = "Ver mais produtos";
    showProductsBtn.classList.remove("bg-secondary", "text-white");
    showProductsBtn.classList.add("text-primary");

    enableArrows();
    carousel.classList.remove("justify-center"); // Remove a centralização quando volta ao estado normal
    checkButtons();
  }
});

// Abre e fecha o menu mobile ao clicar no ícone
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Fecha o menu ao clicar em qualquer item da lista (apenas no mobile)
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth < 900) {
      menu.classList.add("hidden"); // Fecha o menu
    }
  });
});

// Função para desabilitar botões quando necessário
function checkButtons() {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  prevBtn.disabled = carousel.scrollLeft <= 0;
  nextBtn.disabled = carousel.scrollLeft >= maxScrollLeft;
}

// Desabilita as setas quando o carrossel está expandido
function disableArrows() {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
}

// Habilita as setas quando o carrossel volta ao comportamento normal
function enableArrows() {
  prevBtn.style.display = "block";
  nextBtn.style.display = "block";
}

// Inicializa o estado dos botões
checkButtons();
