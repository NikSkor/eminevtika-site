import './index.html';
import './index.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/bundle';

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

productSlider();