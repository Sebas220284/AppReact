import React from "react";
import ProyectoIMG from '../../assets/proyecto1.png'
import("./portafolio.css");
function Portafolio() {
  return (
    <section id="portafolio">
      <h5>RECIENTES TRABAJOS</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio_container">
        <article className="portafolio_items">
          <div className="portafolio_items-image">
<img src={ProyectoIMG} alt="" />
          </div>
          <h3>Notas App</h3>
          <div className="portafolio_item-cta">
          <a href="https://github.com/Sebas220284/Notas_App" className="btn" target='_blank'>Github</a>
          <a href="https://app-production-bd5d.up.railway.app" className="btn btn-primary" target='_blank'>Demostracion</a>
          </div>
        </article>
        <article className="portafolio_items">
          <div className="portafolio_items-image">
<img src={ProyectoIMG} alt="" />
          </div>
          <h3>Notas App</h3>
          <div className="portafolio_item-cta">
          <a href="https://github.com/Sebas220284/Notas_App" className="btn" target='_blank'>Github</a>
          <a href="https://app-production-bd5d.up.railway.app" className="btn btn-primary" target='_blank'>Demostracion</a>
          </div>
        </article>
        <article className="portafolio_items">
          <div className="portafolio_items-image">
<img src={ProyectoIMG} alt="" />
          </div>
          <h3>Notas App</h3>
          <div className="portafolio_item-cta">
          <a href="https://github.com/Sebas220284/Notas_App" className="btn" target='_blank'>Github</a>
          <a href="https://app-production-bd5d.up.railway.app" className="btn btn-primary" target='_blank'>Demostracion</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portafolio;
