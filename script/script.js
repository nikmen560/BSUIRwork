if (window.matchMedia("(max-width: 490px)").matches) {
      footerWrapper();  
    let slideIndex = 1;
    showSlide(slideIndex)
    let review = document.querySelector('.reviews-wrap');

    review.insertAdjacentHTML("beforeend",
        `<span class="slider-toggler-right review-next"                          onclick="nextReview()"></span>`);




}


function showSlide(currentSlide) {
    const reviews = document.querySelectorAll('.review');
    if (currentSlide !== 1) {
        let review = document.querySelector('.reviews-wrap');

        review.insertAdjacentHTML("beforeend",
            `<span class="slider-toggler-left review-prev"                          onclick="prevReview()"></span>`);





    } else {

    }

    if (currentSlide > reviews.length) {
        slideIndex = 1;


    }
    if (currentSlide < 1) {
        slideIndex = reviews.length;

    }
    reviews.forEach((review, i) => {
        review.style.display = 'none';
    })
    reviews[currentSlide - 1].style.display = "block";
}

function nextReview() {
    showSlide(slideIndex += 1);
}

function prevReview() {
    showSlide(slideIndex -= 1);
}
