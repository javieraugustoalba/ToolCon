import React from 'react';
import "./reports.css"
import report from "./reports.png"
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';

function Reports() {
  return (
  <>
  <div>
    <Header ></Header>
    <div className='main-container'>
      <LeftNav></LeftNav>
      <div className='flex-column-a color-reports'>
        <h2 className='report-h2'>Reportes</h2>
        <div className='conteint-reports'>
          <div >
            <label className='content-la'>Herramientas en Existencia<button><img src={report}></img></button></label>
            <label className='content-la'>Herramientas por Operarios<button><img src={report}></img></button></label>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div> 
  </>
  );
}

export default Reports;