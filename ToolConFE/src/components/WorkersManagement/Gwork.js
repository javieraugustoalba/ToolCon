import React from 'react';
import "./Gwork.css"
import modificar from '../ToolManagement/assets/modificar.png'
import eliminar from '../ToolManagement/assets/eliminar.png'

const workersData = [
  { id: 1, name: 'Martillo', code: '35464-AH' },
  { id: 2, name: 'Destornillador', code: '14877-ET'},
  // ... más datos
];

const Gwork = () => {
  return (
    <div className="wherramientas-container">
      <h1 className="wworkers-heading">Gestión de Operarios</h1>
      <div className="wworkers-table-container">
        <table className="wherramientas-table">
          <thead>
            <tr >
              <th>Nombre de Operario</th>
              <th>Codigo</th>
            </tr>
          </thead>
          <tbody className="wherramientas-table-color">
            {workersData.map((tool) => (
              <tr key={tool.id}>
                <td className="w-border-left">{tool.name}</td>
                <td>{tool.code}</td>
                <td className="w-border-right">
                  <button className="wherramientas-button"><img src={modificar} with="24px" height="24px" /></button>
                  <button className="wherramientas-button"><img src={eliminar} with="24px" height="24px" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="wbotoncrear">
          <span>Agregar Operario</span>
        </button>
      </div>
    </div>
  );
};

export default Gwork;