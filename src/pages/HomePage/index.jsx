import style from './HomePage.module.scss';

import CarouselMod from "../../components/CarouselMod";
import NavBar from "../../components/NavBar";
import PageSection from '../../components/PageSection';
import About from '../../components/About';

function HomePage() {
  return (
    <>
      <NavBar/>
      <CarouselMod/>
    
      <main className={style.mainSection}>
        <PageSection title={'CONHEÇA'} component={<About/>} />
        <PageSection title={'SERVIÇOS'} />
        <PageSection title={'RESULTADOS'} />
      </main>

    </>
  );
}

export default HomePage;
