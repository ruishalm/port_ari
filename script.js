document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const imagesContainer = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    let currentImageIndex = 0;
    const totalImages = images.length;

    function slideCarousel(index) {
        const offset = -index * 100; // Calcula o deslocamento em porcentagem
        imagesContainer.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', function() {
        // O operador '%' (módulo) garante que o carrossel volte ao início (índice 0) após a última imagem.
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        slideCarousel(currentImageIndex);
    });

    prevButton.addEventListener('click', function() {
        // A soma com 'totalImages' evita um resultado negativo ao voltar da primeira para a última imagem.
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        slideCarousel(currentImageIndex);
    });

    // Inicia o carrossel na posição correta (sem isso, ele começaria em branco)
    slideCarousel(currentImageIndex);
});

// --- Acordeão (FAQ) com DIVs ---
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const isOpen = accordionItem.classList.contains('is-open');
        accordionItem.classList.toggle('is-open');
        header.setAttribute('aria-expanded', !isOpen);
    });

    // Permitir abrir/fechar com a tecla Enter
    header.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            header.click();
        }
    });
});