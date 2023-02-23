import React from "react";
import { BsCheck } from "react-icons/bs";
import("./serices.css");

function Services() {
  return (
    <section id="services">
      <h5>LO QUE OFREZCO</h5>
      <h2>Servicios</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX DESIGN</h3>
          </div>
          <ul className="service_lista">
            <li>
              <BsCheck className="service_list-icons" />
              <p>Definir el tipo de usuario al que se dirige el producto.</p>
            </li>
            <li>
              <BsCheck className="service_list-icons" />
              <p>Investigar y analizar el modelo de interacción.</p>
            </li>
            <li>
              <BsCheck className="service_list-icons" />
              <p>Identificar patrones de comportamiento y establecer mejoras en base a ellos.</p>
            </li>
            <li>
              <BsCheck className="service_list-icons" />
              <p>Colaborar con el equipo de contenidos y de desarrollo.</p>
            </li>
            <li>
              <BsCheck className="service_list-icons" />
              <p>Combinar la estrategia y el desarrollo de UX con el trabajo del departamento de UI.</p>
            </li>
            <li>
              <BsCheck className="service_list-icons" />
              <p>Generar un vínculo sólido entre el producto y el usuario.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>DESARROLADOR WEB</h3>
          </div>
          <ul className="service_lista">
            <li>
              <BsCheck className="service_list-icons" />
              <p>Amplio conocimiento funcional y experiencia en codificación.
</p>
            </li>
            <li>
              <BsCheck className="service_list-icons" />
              <p>Experiencia en gestión de equipo.</p>
            </li>
            <li>
              <BsCheck className="service_list-icons" />
              <p>Conocimiento básico en optimización de motores de búsqueda.</p>
            </li>
            <li>
              <BsCheck className="service_list-icons" />
              <p>Solucionar problemas del sitio web.</p>
            </li>
            <li>
              <BsCheck className="service_list-icons" />
              <p>Mantener y actualizar el sitio web.</p>
            </li>
            <li>
              <BsCheck className="service_list-icons" />
              <p>Hacer prototipos del sitio web.</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  );
}

export default Services;
