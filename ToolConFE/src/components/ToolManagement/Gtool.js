import React from "react";
import "./Gtool.css"
import modificar from './assets/modificar.png'
import eliminar from './assets/eliminar.png'
import { NavLink } from "react-router-dom";



const toolsData = [
    { id: 1, name: 'Martillo', brand: 'MarcaA', purchaseDate: '01/01/2022', usedTime: '2 años', cost: 20, status: 'Disponible' },
    { id: 2, name: 'Destornillador', brand: 'MarcaB', purchaseDate: '02/01/2022', usedTime: '2 años', cost: 15, status: 'En uso' },
    // ... más datos
  ];
  
  const Gtool = () => {
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
          <NavLink to={"/create-tool"}>
          <button className="botoncrear">
            <span>Crear</span>
          </button>
          </NavLink>
        </div>


        <div className="sherramientas-container">
          <div>
            <h2 className="title-solicitud">Solicitudes de Herramientas</h2>
            <p className="colorrojo">Realice Consultas</p>
          </div>
          <div>
            <h2 className="h-soli">Herramientas</h2>
            <select className="select-soli">
              <option>...</option>
              <option>...</option>
            </select>
          </div>
          <div className="celect-soli">
            <h2 className="e-soli">Estado</h2>
            <h2 className="e-soli">Codigo de la Herramienta</h2>
          </div>
          <div className="selecontent"> {/* Añadido un contenedor adicional */}
              <select className="select-soli">
                <option>...</option>
                <option>...</option>
              </select>
              <select className="select-soli">
                <option>...</option>
                <option>...</option>
              </select>
          </div>
          <button className="botonsolicitud">
            <span>Generar Solicitud</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default Gtool;
