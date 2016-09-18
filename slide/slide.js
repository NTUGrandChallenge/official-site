var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var slides = $('.slides');
    if(n >= slides.length){
        slideIndex = 0;
    }
    if(n < 0){
        slideIndex = slides.length - 1;
    }
    
    $('.slides-container').css('transform', 'translateX(' + -slideIndex * 100 + 'vw)');
}