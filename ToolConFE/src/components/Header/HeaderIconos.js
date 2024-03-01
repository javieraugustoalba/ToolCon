import React, { useState } from 'react';
import './HeaderIconos.css';
import notificacion from "./notificacion.png";
import avatar from "./avatardefault.png";
import ajustes from "./ajustes.png";
import LogoutComponent from '../Logout/Logout';

const Header = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleImageClick = () => {
    setShowLogout(true);
  };

  const handleLogout = () => {
    // Aquí deberías agregar tu lógica de cierre de sesión
    // Después de cerrar sesión, oculta el componente de logout
    setShowLogout(false);
  };

  return (
    <div id="main-container">
      <div id="logo">ToolCon</div>
      <div id="profile-notification">
        <div className="notification">
          <img src={notificacion} alt="Descripción de la imagen" width="44px" height="44px" />
        </div>
        <div className="settings" onClick={handleImageClick}>
          <img src={ajustes} alt="Descripción de la imagen" width="44px" height="44px" />
        </div>
        <div className="profil">
          <img src={avatar} alt="Descripción de la imagen" width="44px" height="44px" />
        </div>
        {/* Mostrar el componente de logout si showLogout es true */}
        {showLogout && <LogoutComponent onLogout={handleLogout} />}
      </div>
    </div>
  );
};

export default Header;