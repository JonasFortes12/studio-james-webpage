import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { BsWhatsapp } from "react-icons/bs";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import style from "./CarouselMod.module.scss";

import image1 from "../../assets/images/studio1.png";
import image2 from "../../assets/images/studio2.png";
import image3 from "../../assets/images/studio3.png";

function CarouselMod() {
  return (
    <Carousel indicators={false} controls={false} className={style.carousel}>
      
      <Carousel.Item className={style.carousel__item}>
        <div className={style.carousel__item__imgContainer}>
          <img src={image1} alt="" />
          <div></div>
        </div>
        <Carousel.Caption>
          <h2>Conforto e beleza em sintonia</h2>
          <p>
            Ambiente acolhedor e confortável, onde você possa se sentir à
            vontade para expressar suas preferências e desejos. Cada serviço é
            realizado com um toque de elegância e precisão
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={style.carousel__item}>
        <div className={style.carousel__item__imgContainer}>
          <img src={image2} alt="" />
          <div></div>
        </div>
        <Carousel.Caption>
          <h2>Sorrisos e estilos deslumbrantes</h2>
          <p>
            Nosso compromisso com a excelência e o profissionalismo é refletido
            em cada sorriso deslumbrante que deixamos em nossos clientes
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={style.carousel__item}>
        
        <div className={style.carousel__item__imgContainer}>
          <img src={image3} alt="" />
          <div></div>
        </div>
        
        <Carousel.Caption className={style.carousel__item__caption}>
          <h2>Inovação e qualidade em um só lugar.</h2>
          <Button href="https://www.seusite.com" className={style.carousel__button}>
            <BsWhatsapp style={{marginRight: 10, marginBottom: 3}} size={20}/>
            Mande uma mensagem!
          </Button>{" "}
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMod;
