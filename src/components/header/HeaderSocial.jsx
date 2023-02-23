import React from "react";
import {BsLinkedin}  from "react-icons/bs";
import {FaGithub}  from "react-icons/fa";
import {FaWhatsapp}  from "react-icons/fa";
const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin/>
      </a>
      <a href="https://github.com" target="_blank"><FaGithub/></a>
      <a href="https://api.whatsapp.com/send?phone=%2B529615600952&text=Quiero+implementar+un+nuevo+nivel+a+mi+negocio." target="_blank"><FaWhatsapp/></a>
    </div>
  );
};

export default HeaderSocial;
