import React from 'react';
import './HeaderIconos.css';
import notificacion from "./notificacion.png";
import avatar from "./avatardefault.png";
import ajustes from "./ajustes.png";

const Header = () => {
  return (
    <div id="main-container">
    <div id="logo">ToolCon</div>
    <div id="profile-notification">
        <div className="notification">
          <img src={notificacion} alt="Descripción de la imagen" width="44px" height="44px" />
        </div>
        <div className="settings">
          <img src={ajustes} alt="Descripción de la imagen" width="44px" height="44px" />
        </div>
        <div className="profil">
          <img src={avatar} alt="Descripción de la imagen" width="44px" height="44px" />
        </div> 
    </div>
</div>
  );
};

export default Header;