import style from './NavSection.module.scss';

function NavSection({icon, text, color = '$gray', href = ''}) {

  const styleProp = {
    color: color  
  }

  return(
    <li className={style.item} style={styleProp} >

      {icon}
      <a href={href} style={styleProp} >{text}</a>
      
    </li>
  )


}


export default NavSection;