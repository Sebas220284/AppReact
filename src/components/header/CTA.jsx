import React from 'react'
import CV from '../../assets/CV2.pdf'
import 'animate.css'
function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn animate__animated animate__fadeInLeft'>Descargar CV</a>
        <a href="#contact"className='btn btn-primary animate__animated animate__fadeInRight'>Contactame</a>
    </div>
  )
}

export default CTA
