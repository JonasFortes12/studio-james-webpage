import style from './HomePage.module.scss';

import CarouselMod from "../../components/CarouselMod";
import NavBar from "../../components/NavBar";
import PageSection from '../../components/PageSection';
import { width } from '@mui/system';
import { red } from '@mui/material/colors';

function HomePage() {
  return (
    <>
      <NavBar/>
      <CarouselMod/>
    
      <main className={style.mainSection}>
        <PageSection title={'CONHEÇA'} />
        <PageSection title={'SERVIÇOS'} />
        <PageSection title={'RESULTADOS'} />
      </main>

    </>
  );
}

export default HomePage;
