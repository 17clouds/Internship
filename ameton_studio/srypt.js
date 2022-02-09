
let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector('.questions_carousel')
const track = document.querySelector('.questions_tiles')
// const item = document.querySelector('.tile')
const btnPrev = document.querySelector('.btn_prev')
const btnNext = document.querySelector('.btn_next')
const items = document.querySelectorAll('.tile')
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

// items.forEach((item) => {
//    item.style.minWidth =  `${itemWidth}px`
// })


btnNext.addEventListener('click', () => {
   const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

   position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

   setPosition();
   checkBtns();
});

btnPrev.addEventListener('click', () => {
   const itemsLeft = Math.abs(position) / itemWidth;

   position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

   setPosition();
   checkBtns();
});

const setPosition = () => {
   track.style.transform = `translateX(${position}px)`
};

const checkBtns = () => {
   btnPrev.disabled = position === 0;
   btnNext.disabled = position <= - (itemsCount - slidesToShow) * itemWidth;
};

checkBtns();















// let width = 306;
// let count = 1;
// let carousel = document.querySelector('.questions_carousel')

// let list = carousel.querySelector('.questions_tiles');
// let listElems = carousel.querySelectorAll('.tile');

// let position = 0;



// carousel.querySelector('.questions_btn').onclick = function () {
//    position -= width * count;
//    position = Math.max(position, -width * (listElems.length - count));
//    list.style.marginLeft = position + 'px';
// };

