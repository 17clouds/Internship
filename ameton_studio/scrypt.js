var position = 0;
var slidesToShow = 4;
var slidesToScroll = 1;
var container = document.querySelector('.questions_carousel');
var track = document.querySelector('.questions_tiles'); // const item = document.querySelector('.tile')

var btnPrev = document.querySelector('.btn_prev');
var btnNext = document.querySelector('.btn_next');
var items = document.querySelectorAll('.tile');
var itemsCount = items.length;
var itemWidth = container.clientWidth / slidesToShow;
var movePosition = slidesToScroll * itemWidth; // items.forEach((item) => {
//    item.style.minWidth =  ${itemWidth}px
// })

btnNext.addEventListener('click', function () {
  var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});
btnPrev.addEventListener('click', function () {
  var itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

var setPosition = function setPosition() {
  track.style.transform = "translateX(".concat(position, "px)");
};

var checkBtns = function checkBtns() {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
