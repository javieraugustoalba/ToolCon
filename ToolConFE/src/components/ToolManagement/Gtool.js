import React, { useState, useEffect } from "react";
import "./Gtool.css"
import modificar from './assets/modificar.png'
import eliminar from './assets/eliminar.png'
import { NavLink } from "react-router-dom";



// const toolsData = [
//     { id: 1, name: 'Martillo', brand: 'MarcaA', purchaseDate: '01/01/2022', usedTime: '2 años', cost: 20, status: 'Disponible' },
//     { id: 2, name: 'Destornillador', brand: 'MarcaB', purchaseDate: '02/01/2022', usedTime: '2 años', cost: 15, status: 'En uso' },
//     // ... más datos
//   ];
  
  const Gtool = () => {
    const [toolsData, setToolsData] = useState([]); // Estado para almacenar los datos de las herramientas

    useEffect(() => {
      const fetchHerramientas = async () => {
        try {
          const response = await fetch('https://localhost:7238/api/Herramientas'); // Ajusta la URL según sea necesario
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setToolsData(data); // Almacena los datos de las herramientas en el estado
        } catch (error) {
          console.error("Failed to fetch herramientas:", error);
        }
      };
  
      fetchHerramientas(); // Llama a la función para cargar los datos de las herramientas
    }, []);

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
                  <td className="g-border-left">{tool.nombre}</td>
                  <td>{tool.marca}</td>
                  <td>{tool.fechaCompra}</td>
                  <td>{tool.tiempoUsoEstimado}</td>
                  <td>${tool.costo}</td>
                  <td>{tool.estadoID === 1 ? "Disponible" : "En Uso"}</td>
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
