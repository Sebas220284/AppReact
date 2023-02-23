import React from 'react'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {RiFolder3Line} from 'react-icons/ri'
import ME from '../../assets/sebas2-2-3.jpg'
import './about.css'
function About() {
  return (
    <section id='about'>
      <h2>Acerca de mi</h2>
      <div className=" container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="IMAGE" />
          </div>

        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>EXPERENCIAS</h5>
              <small>2+ años trabajando</small>
            </article>
            
            <article className='about_card'> 
              <RiFolder3Line className='about_icon'/>
              <h5>PROYECTOS</h5>
              <small>2+ proyectos terminados.</small>
            </article>
          </div>
          <p className='about_content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus consequuntur porro fuga adipisci vel suscipit quasi, eligendi voluptates dolorem enim et quas placeat nostrum eius libero alias praesentium animi quibusdam.</p>
          <a href="#contact" className='btn btn-primary'>Contactame</a>
        </div>
      </div>
      
     
    </section>
  )
}

export default About