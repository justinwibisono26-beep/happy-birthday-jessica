// Loading
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Countdown
const birthday = new Date("July 20, 2026 00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "🎉 Happy Birthday Sayanggkuu Duniaku ❤️";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤";
    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);

// Auto Slider
let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlides() {

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 3000);
}

showSlides();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });

// Loading
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Countdown
const birthday = new Date("July 20, 2026 00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "🎉 Happy Birthday Sayanggkuu Duniaku ❤️";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤";
    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);

// Auto Slider
let slideIndex = 0;

const slides = document.querySelectorAll(".slide");

function showSlides() {

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 3000);
}

showSlides();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});
