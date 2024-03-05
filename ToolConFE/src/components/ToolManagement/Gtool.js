import React, { useState, useEffect } from "react";
import "./Gtool.css";
import modificar from './assets/modificar.png';
import eliminar from './assets/eliminar.png';
import { NavLink, useNavigate } from "react-router-dom";

const Gtool = () => {
  const [toolsData, setToolsData] = useState([]);
  const navigate = useNavigate();
  const [rolID, setRolID] = useState(null);
  const [herramientaSeleccionada, setHerramientaSeleccionada] = useState({});
  const usuarioIDStored = localStorage.getItem('usuarioID');
  const rolIDStored = localStorage.getItem('RolID');

  const handleEditClick = (tool) => {
    navigate('/create-tool', { state: { tool } });
  };

  useEffect(() => {
    if (!rolIDStored) {
      navigate('/login');
      return;
    }
    setRolID(parseInt(rolIDStored));

    const fetchHerramientas = async () => {
      try {
        const response = await fetch('https://localhost:7238/api/Herramientas');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setToolsData(data);
      } catch (error) {
        console.error("Failed to fetch herramientas:", error);
      }
    };

    fetchHerramientas();
  }, []);

  const handleDelete = async (herramientaId) => {
    if (window.confirm("Are you sure you want to delete this tool?")) {
      try {
        const response = await fetch(`https://localhost:7238/api/Herramientas/EliminarHerramienta/${herramientaId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log('Tool deleted successfully.');
        // Optionally, refresh the tools list to reflect the deletion
      } catch (error) {
        console.error('Error during the API call:', error);
      }
    }
  };

  const handleSubmit = async () => {
    const herramientaId = herramientaSeleccionada.herramientaId;

    try {
      const prestamo = {
        HerramientaID: herramientaId,
        UsuarioID: parseInt(usuarioIDStored),

      };

      const response = await fetch('https://localhost:7238/api/Herramientas/CrearPrestamo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prestamo),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.mensaje);
      navigate('/m_s');
    } catch (error) {
      console.error('Error al generar la solicitud:', error);

    }
  };

  return (
    <div className="gherramientas-container">
      <h1 className="gherramientas-heading">Gestión de Herramientas</h1>
      {(rolID === 2 || rolID === 3) && (
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
                <tr key={tool.herramientaId}>
                  <td className="g-border-left">{tool.nombre}</td>
                  <td>{tool.marca}</td>
                  <td>{tool.fechaCompra}</td>
                  <td>{tool.tiempoUsoEstimado}</td>
                  <td>${tool.costo}</td>
                  <td>{tool.estadoID === 1 ? "Disponible" : "En Uso"}</td>
                  <td className="g-border-right">
                    <button className="gherramientas-button" onClick={() => handleEditClick(tool)}>
                      <img src={modificar} width="24px" height="24px" alt="Edit" />
                    </button>
                    <button className="gherramientas-button" disabled={tool.estadoID !== 1} onClick={() => handleDelete(tool.herramientaId)}>
                      <img src={eliminar} width="24px" height="24px" />
                    </button>
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
      )}

      {rolID === 1 && (
        <div className="sherramientas-container">
          <div>
            <h2 className="title-solicitud">Solicitudes de Herramientas</h2>
            <p className="colorrojo">Realice Consultas</p>
          </div>
          <div>
            <h2 className="h-soli">Herramientas</h2>
            <select className="select-soli" onChange={(e) => {
              const herramienta = toolsData.find(tool => tool.herramientaId.toString() === e.target.value);
              console.log(toolsData);
              setHerramientaSeleccionada(herramienta || {});
            }}>
              <option value="">Seleccione una herramienta</option>
              {toolsData.map((tool) => (
                <option key={tool.herramientaId} value={tool.herramientaId}>{tool.nombre}</option>
              ))}
            </select>
          </div>
          <div className="celect-soli">
            <h2 className="e-soli">Estado</h2>
            <h2 className="e-soli">Codigo de la Herramienta</h2>
          </div>
          <div className="selecontent">
            <select className="select-soli" disabled>
              <option>{herramientaSeleccionada.estadoID === 1 ? "Disponible" : "En Uso"}</option>
            </select>
            <select className="select-soli" disabled>
              <option>{herramientaSeleccionada.herramientaId}</option>
            </select>
          </div>
          <button className={`botonsolicitud ${herramientaSeleccionada.estadoID === 2 ? 'disabled' : ''}`} onClick={handleSubmit}>
            <span>{herramientaSeleccionada.estadoID === 2 ? 'Herramienta No Disponible' : 'Generar Solicitud'}</span>
          </button>
        </div>
      )}

    </div>
  );
};

export default Gtool;
