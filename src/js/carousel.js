const carousel = document.getElementById("carouselContent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const showProductsBtn = document.getElementById("showProducts");

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
  carousel.classList.toggle("overflow-hidden"); // Desativa a rolagem oculta
  carousel.classList.toggle("flex-wrap"); // Faz os itens quebrarem para novas linhas, se necessário
  carousel.classList.toggle("block");

  if (showProductsBtn.innerText === "Ver mais produtos") {
    showProductsBtn.innerText = "Ver menos produtos";
    showProductsBtn.classList.add("bg-secondary", "text-white"); // Modifica o estilo quando expandido
    showProductsBtn.classList.remove("text-primary");
    disableArrows(); // Desativa as setas ao expandir
  } else {
    showProductsBtn.innerText = "Ver mais produtos";
    showProductsBtn.classList.remove("bg-secondary", "text-white");
    showProductsBtn.classList.add("text-primary");
    enableArrows(); // Reativa as setas ao voltar ao estado normal
    checkButtons(); // Verifica o estado das setas após reativá-las
  }
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
