import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger}from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css'

function Contact() {
 
const form=useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_0tif2zv', 'template_6shxfci', form.current, '_wJMLSpNqLdv6VjPZ')
  e.target.reset()
  .then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});
}
    


  return (
 <section id='contact'>
 
  <h5>PONERSE EN CONTACTO</h5>
  <h2>CONTACTAME</h2>
  <div className="container contact_container">

    <div className="contact_opciones">
    <article className='contact_opcion'>
    <MdOutlineEmail className='contact_opcion-icon'/>
      <h4>Email</h4>
      <h5>sebastianvazquez928@gmail.com</h5>
      <a href="mailto:sebastianvazquez928@gmail.com" target="_blank">Enviar Mensaje</a>
    </article>
   
    <article className='contact_opcion'>
   <FaWhatsapp className='contact_opcion-icon'/>
      <h4>WhatsApp</h4>
      <h5>9615600952</h5>
      <a href="https://api.whatsapp.com/send?phone9615600952" target="_blank">Enviar Mensaje</a>
    </article>
    <article className='contact_opcion'>
 <BsMessenger className='contact_opcion-icon'/>
      <h4>Messenger</h4>
      <h5>Sebastian Vazquez</h5>
      <a href="https://api.whatsapp.com/send?phone=%2B529615600952&text=Quiero+implementar+un+nuevo+nivel+a+mi+negocio." target="_blank">Enviar Mensaje</a>
    </article>
    </div>

    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Tu nombre' required />
      <input type="email" name='email' placeholder='Tu email' required />
      <textarea name="message" rows="7" placeholder='Tu mensaje'required ></textarea>
      <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
    </form>
  </div>
 </section>
  )
}

export default Contact