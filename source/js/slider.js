const sliderContainer = document.querySelector('.slider');
const sliderRange = document.querySelector('.slider__range');

sliderRange.addEventListener('input', (e) => sliderContainer.style.setProperty('--curtain-place', `${e.target.value}%`));
