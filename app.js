let slidePosition =0;
const slides = document.getElementsByClassName("slider_item");
const totalSlides =slides.length;

autoSlide(); //automatic slides

document.
    getElementById('slider--btn--next')
    .addEventListener("click", function(){
        nextSlide();
    });

    document.
    getElementById('slider--btn--prev')
    .addEventListener("click", function(){
        prevSlide();
    });

function autoSlide(){
    let i = 1;
    for(i = 0; i < totalSlides; i++){
       slides[i].classList.remove('slider_item_visible');
       slides[i].classList.add('slider_item_hidden');
    }
    slidePosition++; 
    if(slidePosition > totalSlides){
        slidePosition = 1;
    }
    slides[slidePosition - 1].classList.add('slider_item_visible');
    setTimeout(autoSlide, 5000);

    // slidePosition++; 
    // if(slidePosition > totalSlides){
    //     slidePosition = 1;
    // }
    // updateSlidePosition();
    // setTimeout(autoSlide, 2000);
}

//const updateSlidePosition = () => {
    function updateSlidePosition(){
    for(let slide of slides){
        slide.classList.remove('slider_item_visible');
        slide.classList.add('slider_item_hidden');
    }
    slides[slidePosition].classList.add('slider_item_visible');
}
const nextSlide = () =>{
    if(slidePosition === totalSlides - 1){
        slidePosition=0;
    }else{
        slidePosition++; 
    }
    updateSlidePosition();
}

const prevSlide = () =>{
    if(slidePosition === 0){
        slidePosition = totalSlides - 1;
    }else{
        slidePosition--; 
    }
    updateSlidePosition();
}