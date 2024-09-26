const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;
const scrollStep = 260; // Tamanho do item do carrossel

// Desliza para a próxima parte
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
  checkButtons(); // Checar se os botões precisam ser habilitados/desabilitados
});

// Desliza para a parte anterior
prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
  checkButtons(); // Checar se os botões precisam ser habilitados/desabilitados
});

// Função para habilitar/desabilitar botões baseado na posição de scroll
function checkButtons() {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  // Se o carrossel estiver no início, desabilita o botão 'Anterior'
  if (carousel.scrollLeft <= 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // Se o carrossel estiver no fim, desabilita o botão 'Próximo'
  if (carousel.scrollLeft >= maxScrollLeft) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

// Inicializa o estado dos botões
checkButtons();
