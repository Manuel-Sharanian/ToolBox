const text = "Developing your key to success!";
const target = document.getElementById("animated-line");

let index = 0;
let direction = 1;

function typeLoop() {
    if (direction === 1) {
        target.innerHTML = text.substring(0, index);
        index++;
        if (index > text.length) {
            direction = -1;
            setTimeout(typeLoop, 1500);
            return;
        }
    } else {
        target.innerHTML = text.substring(0, index);
        index--;
        if (index < 0) {
            direction = 1;
            setTimeout(typeLoop, 1000);
            return;
        }
    }
    setTimeout(typeLoop, 70);
}

window.onload = typeLoop;


// Products carousel
const track = document.querySelector(".products-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentIndex = 0;
const cardCount = document.querySelectorAll(".products-track .product-card").length;
const visibleCards = 3;

function updateCarousel() {
    const cardWidth = document.querySelector(".product-card").offsetWidth + 28;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < cardCount - visibleCards) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});
