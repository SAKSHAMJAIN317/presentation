let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    current++;
    if (current >= slides.length) current = 0;
    showSlide(current);
}

function prevSlide() {
    current--;
    if (current < 0) current = slides.length - 1;
    showSlide(current);
}
