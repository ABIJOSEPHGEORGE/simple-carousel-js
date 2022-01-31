let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.getElementById('carousel__button--next').addEventListener('click',function(){
    moveToNextSlide();
});
document.getElementById('carousel__button--prev').addEventListener('click',function(){
    moveToPreviousSlide();
})
function updateSlidePosition(){
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hideen');
    }
    slides[slidePosition].classList.add('carousel__item--visible')
}


function moveToNextSlide(){

    updateSlidePosition();

    if(slidePosition==totalSlides -1){
        slidePosition=0;
    }else{
        slidePosition++;
    }
}
function moveToPreviousSlide(){
    if(slidePosition==0){
        slidePosition= totalSlides-1;
    }else{
        slidePosition--;
    }
    updateSlidePosition();
}