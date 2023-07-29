import style from "./NavBar.module.scss";
import logo from "../../assets/images/logo.png";

import { TiHeartOutline } from "react-icons/ti";
import { LuStars } from "react-icons/lu";
import { BsWhatsapp, BsAward } from "react-icons/bs";
import FadeMenu from "../FadeMenu";
import NavSection from "../NavSection";

function NavBar() {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__logo}>
        <img src={logo} alt="logotipo" />
      </div>

      <ul className={style.navbar__sections}>
        <NavSection text='SOBRE' icon={<BsAward/>}/>
        <NavSection text='SERVIÇOS' icon={<TiHeartOutline/>}/>
        <NavSection text='RESULTADOS' icon={<LuStars/>}/>
        <NavSection text='CONTATOS' icon={<BsWhatsapp />}/>
      </ul>

      <div className={style.navbar__menuButton}>
        <FadeMenu/>
      </div>
    </nav>
  );
}

export default NavBar;
