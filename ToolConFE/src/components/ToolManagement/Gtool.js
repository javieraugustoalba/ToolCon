import React from "react";
import "./Gtool.css"
import modificar from './assets/modificar.png'
import eliminar from './assets/eliminar.png'

const toolsData = [
    { id: 1, name: 'Martillo', brand: 'MarcaA', purchaseDate: '01/01/2022', usedTime: '2 años', cost: 20, status: 'Disponible' },
    { id: 2, name: 'Destornillador', brand: 'MarcaB', purchaseDate: '02/01/2022', usedTime: '2 años', cost: 15, status: 'En uso' },
    // ... más datos
  ];
  
  const Home = () => {
    return (
      <div className="gherramientas-container">
        <h1 className="gherramientas-heading">Gestión de Herramientas</h1>
        <div className="gherramientas-table-container">
          <table className="gherramientas-table">
            <thead>
              <tr >
                <th>Nombre</th>
                <th>Marca</th>
                <th>Fecha de Compra</th>
                <th>Tiempo de uso</th>
                <th>Costo</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody className="gherramientas-table-color">
              {toolsData.map((tool) => (
                <tr key={tool.id}>
                  <td className="g-border-left">{tool.name}</td>
                  <td>{tool.brand}</td>
                  <td>{tool.purchaseDate}</td>
                  <td>{tool.usedTime}</td>
                  <td>${tool.cost}</td>
                  <td>{tool.status}</td>
                  <td className="g-border-right">
                    <button className="gherramientas-button"><img src={modificar} with="24px" height="24px" /></button>
                    <button className="gherramientas-button"><img src={eliminar} with="24px" height="24px" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="botoncrear">
                <span>Crear</span>
          </button>
        </div>


        <div className="sherramientas-container">
              <div>
                <h2 className="title-solicitud">Solicitudes de Herramietas</h2>
                <p className="colorrojo">Realize Consultas</p>
              </div>
              <div >
                <h2 className="h-soli">Herramientas</h2>
              </div>
        </div>
      </div>
    );
  };
  
  export default Home;
