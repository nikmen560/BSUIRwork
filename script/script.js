if (window.matchMedia("(max-width: 490px)").matches) {
    let slideIndex = 1;
    showSlide(slideIndex)


} else {
}

function showSlide(currentSlide) {

    const reviews = document.querySelectorAll('.review');

    if(currentSlide > reviews.length) {
        slideIndex = 1;
    }
    if(currentSlide < 1) {
        slideIndex = reviews.length;
    }
    reviews.forEach((review, i)=>{
            review.style.display = 'none';
    })
    reviews[slideIndex-1].style.display = "block";
}

function nextSlide(slide) {
    showSlides(slideIndex += 1);
}
function prevSlide(slide) {
    showSlides(slideIndex -= 1);
}

// function curSlide(slide) {
//     showSlides(slideIndex = n);
// }
