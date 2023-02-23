import React from "react";
import {FaWhatsapp} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiFacebook} from 'react-icons/fi'
import("./footer.css");
import ("./iconos.css")
function Footer() {
  return (
   


    <footer>
    <a href="" className="footer_logo">
      Sebastian Vazquez Vazquez
    </a>
    <ul className="permalinks">
      <li>
        <a href="#">Inicio</a>
      </li>
      <li>
        <a href="#about">Sobre mi</a>
      </li>
      <li>
        <a href="#experencias">Experencia</a>
      </li>

      <li>
        <a href="#services">Servicios</a>
      </li>
      <li>
        <a href="#portafolio">Portafolio</a>
      </li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
    <div>
    <ul className="social-icons">
      <li><a href=""><i><FaWhatsapp/></i></a></li>
      <li> <a href=""><i><BsInstagram/></i></a></li>
    
     <li><a href=""><i><FiFacebook/></i></a></li> 
</ul>
    </div>
    
<div className="footer_copy">
  <small> &copy; Sebastian Vazquez Vazquez, Todos los derechos reservados.</small>
</div>




</footer>

  );
}

export default Footer;
