let slideIndex = 1;
showSlides(slideIndex)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides (num) {
    let i;
    let slides = document.querySelectorAll("div.slide");
    let dots = document.querySelectorAll(".slider-dot");

    if(num > slides.length) {
        slideIndex = 1;
    }
    if(num < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

}