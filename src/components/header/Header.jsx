import React from 'react'
import CTA from './CTA'
import ME from '../../assets/sebas1-removebg-preview.png'
import HeaderSocial from './HeaderSocial'


import ('./header.css')



const Header=()=> {
  return (
<header>
<div className="container header_container">


    <h5>Hola soy</h5>
    <h1> Sebastian Vazquez</h1>
    <h5 className='text-light'>Fullstack Developer</h5>
   <CTA/>
   <HeaderSocial />
<div className="me animate__animated animate__backInDown">
    <img src={ME}alt="yo" />
   
</div>
<a href="#contact" className='scroll_down'>Desplazarse</a>

</div>


</header>
  )
}

export default Header