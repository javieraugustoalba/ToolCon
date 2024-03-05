import React from 'react';
import "./reports.css"
import report from "./reports.png"
import Header from '../Header/HeaderIconos';
import Footer from '../Footer/Footer';
import LeftNav from '../LeftNav/LeftNav';

function Reports() {

  function downloadReport(reportName) {
    fetch(`https://localhost:7238/api/Reports/${reportName}`, {
      method: 'GET',
    })
    .then((response) => response.blob())
    .then((blob) => {
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      // Create a new anchor element
      const a = document.createElement('a');
      a.href = url;
      a.download = `${reportName}.xlsx`; // Filename for download
      document.body.appendChild(a); // Append the anchor to the document
      a.click(); // Trigger click to download
      a.remove(); // Clean up
    })
    .catch((error) => console.error('Error downloading report:', error));
  }

  const generateHerramientasPorOperariosReport = async () => {
    try {
      const response = await fetch('https://localhost:7238/api/Reports/HerramientasPorOperarios');
      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'Herramientas_por_Operarios.xlsx');
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        console.error("Failed to generate report");
      }
    } catch (error) {
      console.error("Error generating report:", error);
    }
  };

  const generateHerramientasMasUtlizadas = async () => {
    try {
      const response = await fetch('https://localhost:7238/api/Reports/HerramientasMasUtilizadas');
      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'Herramientas_Mas_Utilizadas.xlsx');
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        console.error("Failed to generate report");
      }
    } catch (error) {
      console.error("Error generating report:", error);
    }
  };
  
  
  
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
            <label className='content-la'>Herramientas en Existencia<button onClick={() => downloadReport('HerramientasEnExistencia')}><img src={report} alt="Generar Reporte"></img></button></label>
            <label className='content-la'>Herramientas por Operarios<button onClick={generateHerramientasPorOperariosReport}><img src={report} alt="Generar Reporte"/></button></label>
            <label className='content-la'>Herramientas Mas Utilizadas<button onClick={generateHerramientasMasUtlizadas}><img src={report} alt="Generar Reporte"/></button></label>
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