import React, { useState, useEffect } from 'react';
import "./Gwork.css";
import modificar from '../ToolManagement/assets/modificar.png';
import eliminar from '../ToolManagement/assets/eliminar.png';
import { useNavigate } from 'react-router-dom';

const Gwork = () => {
  // State to store workers data
  const [workersData, setWorkersData] = useState([]);
  const [activeLoans, setActiveLoans] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const workersResponse = await fetch('https://localhost:7238/api/Operarios');
        const loansResponse = await fetch('https://localhost:7238/api/Prestamos/ActiveLoans'); // Hypothetical endpoint

        if (!workersResponse.ok || !loansResponse.ok) {
          throw new Error(`HTTP error! status: ${workersResponse.status || loansResponse.status}`);
        }

        const workersData = await workersResponse.json();
        const loansData = await loansResponse.json();

        const loansMap = loansData.reduce((acc, loan) => {
          acc[loan.usuarioID] = true; // Mark user as having an active loan
          return acc;
        }, {});

        setActiveLoans(loansMap);
        setWorkersData(workersData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchWorkers();
  }, []);

  const handleEditWorker = (worker) => {
    navigate('/create-operator', { state: { worker } });
  };

  const handleCreateNewOperator = () => {
    navigate('/create-operator');
  };

  const handleDeleteWorker = async (usuarioID) => {
    console.log(activeLoans);
    if (window.confirm('Are you sure you want to delete this worker?')) {
      try {
        const response = await fetch(`https://localhost:7238/api/Operarios/${usuarioID}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Refresh the list of workers after deletion
        const updatedWorkers = workersData.filter(worker => worker.usuarioID !== usuarioID);
        setWorkersData(updatedWorkers);

        console.log('Worker deleted successfully.');
      } catch (error) {
        console.error("Failed to delete worker:", error);
      }
    }
  };

  return (
    <div className="wherramientas-container">
      <h1 className="wworkers-heading">Gestión de Operarios</h1>
      <div className="wworkers-table-container">
        <table className="wherramientas-table">
          <thead>
            <tr>
              <th>Nombre de Operario</th>
              <th>Codigo</th>
            </tr>
          </thead>
          <tbody className="wherramientas-table-color">
            {workersData.map((worker) => (
              <tr key={worker.usuarioID}>
                <td className="w-border-left">{`${worker.nombre} ${worker.apellido}`}</td>
                <td>{worker.usuarioID}</td>
                <td className="w-border-right">
                  <button className="wherramientas-button" onClick={() => handleEditWorker(worker)}>
                    <img src={modificar} width="24px" height="24px" alt="Edit" />
                  </button>
                  <button className={`wherramientas-button ${!!activeLoans[worker.usuarioID] ? 'button-disabled' : ''}`}
                    onClick={() => handleDeleteWorker(worker.usuarioID)} disabled={!!activeLoans[worker.usuarioID]}>
                    <img src={eliminar} width="24px" height="24px" alt="Eliminar" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="wbotoncrear" onClick={handleCreateNewOperator}>
          <span>Agregar Operario</span>
        </button>
      </div>
    </div>
  );
};

export default Gwork;
