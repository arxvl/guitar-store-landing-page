// Dark Mode Toggle with Save
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        toggleBtn.textContent = "🌙";
    }
});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
    } else {
    scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Reveal Sections on Scroll
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
});

// Auto-Playing Review Carousel
const carousel = document.querySelector(".review-carousel");
let scrollAmount = 0;

setInterval(() => {
    if (carousel.scrollWidth - carousel.clientWidth === scrollAmount) {
        scrollAmount = 0;
    } else {
        scrollAmount += carousel.clientWidth;
    }
    carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
}, 3000);

// Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
});

// Close lightbox on outside click
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Auto year in footer
document.getElementById("year").textContent = new Date().getFullYear();