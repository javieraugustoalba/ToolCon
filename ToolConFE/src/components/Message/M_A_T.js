import React from 'react';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import './Message.css'
import { NavLink } from 'react-router-dom';



export default function MessageAT() {
  return (
<>
    <div>
        <Header></Header>
        <div className='main-container'>
            <LeftNav></LeftNav>
            <div className='flex-column-a fondo-mensaje'>
              <div>
                <span className='gestion-de-herramientas'>Gestion de Operarios</span>
              </div>
              <div className='mensaje-centro'>
                <span>La Herramienta A Sido Asignada Correctamente</span>
              </div>
              <div className='mensaje-botones'>
                <NavLink to={"/dashboard"}>
                <button className='mensaje-botones-regresar'>Regresar</button>
                </NavLink>
              </div>
                
            </div>
        </div>
    </div>
    <Footer></Footer>
</>
  );
}