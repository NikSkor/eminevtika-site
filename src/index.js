import './index.html';
import './index.scss';
import 'swiper/css/bundle';
import showAndHide from './modules/showAndHide';



// const countColumn = () => {
//   let count = 4;
//   let windowInnerWidth = document.documentElement.clientWidth;

//   if (windowInnerWidth <= '800' && windowInnerWidth >= '600') {
//     count = 3;
//   } else if (windowInnerWidth <= '600' && windowInnerWidth >= '500') {
//     count = 2;
//   } else if (windowInnerWidth <= '500') {
//     count = 1;
//   }

//   return count;
// }


const productSlider = () => {
  Promise.all([
    import('swiper/modules'),
    import('swiper'),
    import('swiper/css'),
  ]).then(([{ Navigation, Thumbs }, Swiper]) => {
    new Swiper.default('.swiper', {
      slidesPerView: 4,
      spaceBetween: 50,
      navigation: {
        nextEl: '.speakers__arrow_right',
        prevEl: '.speakers__arrow_left',
      },
      modules: [Navigation, Thumbs],
      breakpoints: {
        // настройки для разных разрешений
        0: {
          slidesPerView: 2,
        },
        580: {
          slidesPerView: 3,
        },
        780: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  });
};

const initSite = () => {
  productSlider();
  showAndHide();
}

initSite();