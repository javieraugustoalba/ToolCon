import React from 'react';
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';
import './Message.css'
import { NavLink } from 'react-router-dom';



export default function CreateOperator() {
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
                <span>Operario Agregado Correctamente</span>
              </div>
              <div className='mensaje-botones'>
                <NavLink to={"/workers-management"}>
                <button className='mensaje-botones-regresar'>Regresar</button>
                </NavLink>
                <NavLink to={"/create-operator"}>
                <button className='mensaje-botones-agregar'>Agregar Otro Operario</button>
                </NavLink>
              </div>
                
            </div>
        </div>
    </div>
    <Footer></Footer>
</>
  );
}