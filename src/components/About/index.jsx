import style from "./About.module.scss";
import aboutImage from "../../assets/images/aboutImage.png";
import asterisco from "../../assets/images/asterisco.png";

function About() {
  return (
    <>
      <div className={style.about__desktop}>
        <div className={style.about__desktop__left}>
          <h2>
            Transformando Beleza em Arte:
            <br />
            Studio James Fortes!
          </h2>

          <div className={style.about__desktop__left__lineH}></div>
          <img src={asterisco} alt="" />

          <p>
            No Studio de Beleza James Fortes, a perfeição é nosso objetivo e
            nosso compromisso. Cada detalhe é cuidadosamente pensado para
            garantir resultados impecáveis. Aqui, você encontrará uma ampla
            variedade de serviços projetados para realçar sua beleza natural e
            deixá-lo(a) deslumbrante em qualquer ocasião.
          </p>
        </div>

        <div className={style.about__desktop__right}>
          <div className={style.about__desktop__right__img}>
            <img src={aboutImage} alt="foto_da_seção_sobre" />
          </div>

          <div className={style.about__desktop__right__lineH}></div>
        </div>
      </div>

      <div className={style.about__mobile}>
        
        <div className={style.about__mobile__img}>
          <img src={aboutImage} alt="foto_da_seção_sobre" />
        </div>

        <div className={style.about__mobile__lineH}></div>
        <img className={style.about__mobile__icon} src={asterisco} alt="" />

        <h2>
          Transformando Beleza em Arte:
          <br />
          Studio James Fortes!
        </h2>

        <p>
          No Studio de Beleza James Fortes, a perfeição é nosso objetivo e nosso
          compromisso.<br/> Cada detalhe é cuidadosamente pensado para garantir
          resultados impecáveis.<br/>Aqui, você encontrará uma ampla variedade de
          serviços projetados para realçar sua beleza natural e deixá-lo(a)
          deslumbrante em qualquer ocasião.
        </p>
      </div>
    </>
  );
}

export default About;
