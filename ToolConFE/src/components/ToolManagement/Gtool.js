import React, { useState, useEffect } from "react";
import "./Gtool.css";
import modificar from './assets/modificar.png';
import eliminar from './assets/eliminar.png';
import { NavLink, useNavigate } from "react-router-dom";

const Gtool = () => {
  const [toolsData, setToolsData] = useState([]);
  const [toolsInUse, setToolsInUse] = useState([]);
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
        console.log(toolsData);
      } catch (error) {
        console.error("Failed to fetch herramientas:", error);
      }
    };

    fetchHerramientas();
  }, []);

  const handleDelete = async (herramientaId) => {
    if (window.confirm("Seguro que desea borrar esta herramienta?")) {
      try {
        const response = await fetch(`https://localhost:7238/api/Herramientas/EliminarHerramienta/${herramientaId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log('Herramienta borrada Satisfactoriamente.');

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
  useEffect(() => {
    if (!rolIDStored) {
        navigate('/login');
        return;
    }
    setRolID(parseInt(rolIDStored));

    // Adjusted to fetch tools in use by the logged-in user
    const fetchHerramientasEnUso = async () => {
        try {
            const usuarioID = parseInt(usuarioIDStored);
            const response = await fetch(`https://localhost:7238/api/Herramientas/HerramientasEnUsoPorUsuario/${usuarioID}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const toolsInUseData = await response.json();
            setToolsInUse(toolsInUseData); // Assuming toolsData is meant to store tools in use

        } catch (error) {
            console.error("Failed to fetch herramientas en uso:", error);
        }
    };

    fetchHerramientasEnUso();
}, [navigate, rolIDStored, usuarioIDStored]);

  const handleReturnTool = async (prestamoId) => {
    // Assuming you have a way to get the `prestamoId` for the tool being returned
    // For demonstration, let's say you have it stored or can retrieve it somehow

    if (!prestamoId) {
      alert("No pudimos encontrar prestamos para esta herramienta.");
      return;
    }

    if (window.confirm("Seguro que desea devolver esta herramienta?")) {
      try {
        const response = await fetch(`https://localhost:7238/api/Prestamos/DevolverHerramienta/${prestamoId}`, {
          method: 'POST', // or 'PUT' if your API requires
          headers: {
            'Content-Type': 'application/json',
            // Include any other headers your API needs, such as authorization tokens
          },
        });

        if (response.ok) {
          alert("Herramienta retornada satisfactoriamente.");
          // Optionally refresh the tools list or update the UI as needed
          // fetchToolsData(); // if you have a function to refresh the tools data
        } else {
          throw new Error("Failed to return the tool.");
        }
      } catch (error) {
        console.error("Error returning the tool:", error);
        alert("Error devolviendo herramienta. Por favor intente de nuevo.");
      }
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
          <button disabled={herramientaSeleccionada.estadoID === 2} className={`botonsolicitud ${herramientaSeleccionada.estadoID === 2 ? 'disabled' : ''}`} onClick={handleSubmit}>
            <span>{herramientaSeleccionada.estadoID === 2 ? 'Herramienta No Disponible' : 'Generar Solicitud'}</span>
          </button>
        </div>
      )}

      {rolID === 1 && (
        <div className="herramientas-en-uso-container">
          <h2 className="herramientatitulo">Herramientas en Uso</h2>
          <div  className="tablaherramienta">
            <table className="coltable">
              <thead>
                <tr>
                  <th className="nombreherramientat">Nombre</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <div className="tablacontenidoherramienta">
                <tbody >
                  {toolsInUse.filter(toolInUse => toolInUse.estadoID !== 1).map((toolInUse) => (
                    <tr key={toolInUse.prestamoID} className="textcolhe">
                      <td className="tablaherramientas" >{toolInUse.nombre} Cod: {toolInUse.prestamoID}</td>
                      <td>
                        <button onClick={() => handleReturnTool(toolInUse.prestamoID)}>Devolver Herramienta</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
              </div>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gtool;
