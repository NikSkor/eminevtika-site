import './index.html';
import './index.scss';
import 'swiper/css/bundle';
import showAndHide from './modules/showAndHide';

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
    });
  });
};

const initSite = () => {
  productSlider();
  showAndHide();
}

initSite();