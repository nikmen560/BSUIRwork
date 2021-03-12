if (window.matchMedia("(max-width: 490px)").matches) {
    let currentSlide = 0;
    const reviews = document.querySelectorAll('.review');
    console.log(reviews)
    reviews.forEach((review, i)=>{
        if(i != currentSlide) {
            review.classList.add('hide');
        }
    })

} else {
}