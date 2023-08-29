// this section js is for HOMEPAGE BANNER SLIDER 
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

        
let currentIndex = 0;
const intervalTime = 3000;

function showSlide(index) {
    sliderContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
        showSlide(currentIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto change slides every 2 seconds
setInterval(nextSlide, intervalTime);