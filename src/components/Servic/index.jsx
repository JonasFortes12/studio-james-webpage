// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Servic.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import makeup from '../../assets/images/imgServices/makeup_service.png'
import hearStyle from '../../assets/images/imgServices/penteado_service.png'
import locks from '../../assets/images/imgServices/mechas_service.png'
import hairCutting from '../../assets/images/imgServices/corte_service.png'
import sealing from '../../assets/images/imgServices/selagem_sevice.png'
import eyebrows from '../../assets/images/imgServices/sobrancelha_service.png'
import nails from '../../assets/images/imgServices/unhas_service.png'

function Servic() {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src={makeup} alt="slide_img" />
            <div class="gradient"></div>
            <h3 className="text">Maquiagens</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src={hearStyle} alt="slide_img" />
            <div class="gradient"></div>
            <h3 className="text">Penteados</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src={locks} alt="slide_img" />
            <div class="gradient"></div>
            <h3 className="text">Mechas</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src={hairCutting} alt="slide_img" />
            <div class="gradient"></div>
            <h3 className="text">Cortes</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src={sealing} alt="slide_img" />
            <div class="gradient"></div>
            <h3 className="text">Selagem</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src={eyebrows} alt="slide_img" />
            <div class="gradient"></div>
            <h3 className="text">Sobrancelhas</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src={nails} alt="slide_img" />
            <div class="gradient"></div>
            <h3 className="text">Unhas</h3>
          </div>
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
