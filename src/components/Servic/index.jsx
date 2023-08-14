// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Servic.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import slide_img_1 from '../../assets/images/imgServices/img_1.jpg'
import slide_img_2 from '../../assets/images/imgServices/img_2.jpg'
import slide_img_3 from '../../assets/images/imgServices/img_3.jpg'
import slide_img_4 from '../../assets/images/imgServices/img_4.jpg'


function Servic() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_img_1} alt="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_2} alt="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_3} alt="slide_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_4} alt="slide_img" />
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default Servic;
