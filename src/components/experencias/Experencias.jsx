import React from "react";
import {BsFillPatchCheckFill} from 'react-icons/bs'
import "./experecias.css";
function Experencias() {
  return (
    <section id="experencias">
      <h5>¿QUE HABILIDADES TENGO?</h5>
      <h2>MI EXPERENCIA</h2>
      <div className="container experiencia_container">
        <div className="experencia_frontend">
          <h3>DESARROLADOR FRONTEND</h3>
          <div className="experencia_content">
            <article className="experencia_detalles">
              <BsFillPatchCheckFill/>
            <div>
            <h4>HTML</h4>
              <small className="text-light">Experimentado</small>
            </div>
            </article>
            <article className="experencia_detalles">
            <BsFillPatchCheckFill/>
             <div>
             <h4>BOOTSTRAP</h4>
              <small className="text-light">Intermedio</small>
             </div>
            </article>
            <article className="experencia_detalles">
            <BsFillPatchCheckFill/>
              <div>
              <h4>REACT</h4>
              <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experencia_detalles">
            <BsFillPatchCheckFill/>
             <div>
             <h4>CSS</h4>
              <small className="text-light">Intermedio</small>
             </div>
            
            </article>
            <article className="experencia_detalles">
            <BsFillPatchCheckFill/>
             <div>
             <h4>JAVASCRIPT</h4>
              <small className="text-light">Experimentado</small>
             </div>
            </article>
          </div>
        </div>
        <div className="experencias_backend">

        <h3>DESARROLADOR BACKEND</h3>
          <div className="experencia_content">
            <article className="experencia_detalles">
              <BsFillPatchCheckFill/>
             <div>
             <h4>NODE JS</h4>
              <small className="text-light">Intermedio</small>
             </div>

            </article>
            <article className="experencia_detalles">
            <BsFillPatchCheckFill/>
            <div>
            <h4>MONGODB</h4>
              <small className="text-light">Intermedio</small>
            </div>
            </article>
            <article className="experencia_detalles">
            <BsFillPatchCheckFill/>
             <div>
             <h4>PYTHON</h4>
              <small className="text-light">Basico</small>
             </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experencias;
