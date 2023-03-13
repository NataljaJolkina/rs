// SLIDER START

const sliderLine = document.querySelector('.slider__line');
const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');

let position = 0;

//^ FUNCTIONS

const nextSlide = () => {
    if(position < 1800){
        position += 360;
    } else {
        position = 0;
    }
    
    sliderLine.style.left = -position + 'px';
};

const prevSlide = () => {
    if(position > 0){
        position -= 360;
    } else {
        position = 0;
    }
    
    sliderLine.style.left = -position + 'px';
};

setInterval(() => {
    nextSlide();
}, 3000)

//^ EVENTLISTENERS 

nextButton.addEventListener('click', nextSlide);

prevButton.addEventListener('click', prevSlide);

// SLIDER END
