document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const imagesContainer = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    let currentImageIndex = 0;
    const totalImages = images.length;

    function slideCarousel(index) {
        const offset = -index * 100; 
        imagesContainer.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', function() {
        
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        slideCarousel(currentImageIndex);
    });

    prevButton.addEventListener('click', function() {
        
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        slideCarousel(currentImageIndex);
    });

    
    slideCarousel(currentImageIndex);
});

// --- Acordeão (FAQ) ---
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const isOpen = accordionItem.classList.contains('is-open');
        accordionItem.classList.toggle('is-open');
        header.setAttribute('aria-expanded', !isOpen);
    });

    
    header.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            header.click();
        }
    });
});