import './index.html';
import './index.scss';

    // let width = 280; // ширина картинки
    // let count = 4; // видимое количество изображений

    // let list = document.querySelector('.speakers__list');
    // let listElems = document.querySelectorAll('.speakers__item');

    // let position = 0; // положение ленты прокрутки

    // document.querySelector('.speakers__arrow_left').onclick = function () {
    //   // сдвиг влево
    //   position += width * count;
    //   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    //   position = Math.min(position, 0);
    //   list.style.paddingLeft = position + 'px';
    // };

    // document.querySelector('.speakers__arrow_right').onclick = function () {
    //   // сдвиг вправо
    //   position -= width * count;
    //   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    //   position = Math.max(position, -width * (listElems.length - count));
    //   list.style.paddingLeft = position + 'px';
    // };

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.speakers__item');

function goToSlide(index) {
  if (index === 0) {
    index = carouselItems.length - 1;
  } else if (index === carouselItems.length) {
    index = 0;
  }
  currentIndex = index;
  document.querySelector('.speakers__list').style.transform = `translateX(-${currentIndex * 100}%)`;
}
 
function goToNextSlide() {
  goToSlide(currentIndex + 1);
}
 
function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}
 
// setInterval(goToNextSlide, 3000); // автоматическая прокрутка каждые 3 секунды