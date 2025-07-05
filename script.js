// --- Lógica do Carrossel ---
let carouselCurrentIndex = 0;
function moveCarousel(direction) {
    const imagesContainer = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;
    
    if (!imagesContainer || totalImages === 0) return;

    // O cálculo com % (módulo) garante que o índice sempre fique dentro dos limites (0, 1, 2, etc)
    carouselCurrentIndex = (carouselCurrentIndex + direction + totalImages) % totalImages;

    const offset = -carouselCurrentIndex * 100;
    imagesContainer.style.transform = `translateX(${offset}%)`;
}

// --- Acordeão (FAQ) ---
function toggleFaq(headerElement) {
    const accordionItem = headerElement.parentElement;
    const isOpen = accordionItem.classList.contains('is-open');

    // Opcional: Descomente o bloco abaixo se quiser que apenas um item do FAQ fique aberto por vez.
    /*
    document.querySelectorAll('.accordion-item.is-open').forEach(openItem => {
        if (openItem !== accordionItem) {
            openItem.classList.remove('is-open');
            openItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        }
    });
    */

    accordionItem.classList.toggle('is-open');
    headerElement.setAttribute('aria-expanded', !isOpen);
}

// --- Theme Switcher ---
function switchTheme(theme) {
    // Adiciona ou remove a classe do body
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
    // Salva a preferência no navegador
    localStorage.setItem('theme', theme);
    // Atualiza qual botão parece "ativo"
    document.querySelectorAll('.theme-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

// Aplica o tema salvo quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    switchTheme(savedTheme);
});