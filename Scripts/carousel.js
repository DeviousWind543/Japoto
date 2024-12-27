const carousels = document.querySelectorAll('.carousel-images');
const prevButtons = document.querySelectorAll('.carousel-btn.prev');
const nextButtons = document.querySelectorAll('.carousel-btn.next');

prevButtons.forEach((button) => {
    button.addEventListener('click', () => handleCarousel(button.dataset.target, -1));
});

nextButtons.forEach((button) => {
    button.addEventListener('click', () => handleCarousel(button.dataset.target, 1));
});

function handleCarousel(target, direction) {
    const carousel = document.getElementById(`carousel-${target}`);
    const images = carousel.children.length;
    const width = carousel.children[0].getBoundingClientRect().width;

    let index = parseInt(carousel.dataset.index) || 0;
    index = (index + direction + images) % images;

    carousel.style.transform = `translateX(${-index * width}px)`;
    carousel.dataset.index = index;
}
