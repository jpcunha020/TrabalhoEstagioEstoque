import React from "react";
import "./UserProfile.css";

function UserProfile() {
  return (
    <div className="user-profile-container">
      
      <div className="left-section">
        <div className="user-avatar">
     

        </div>
      <div className="social">
        <h2>Nome do Usuário</h2>
        <p>E-mail do Usuário</p>
        </div>
        
        <div className="buttons-container">
        
          
          <button>Reclamar</button>
          <button>Mudar Senha</button>
          <button>Sair</button>
        </div>
      </div>
      

      
      <div className="right-section">
        <div className="image-placeholder"></div>
        <p>
          Usuário é administrador de uma empresa ??? <br />
          Tem 4 Contratos com Outras empresas. <br />
          Vende produtos de Alimentação.
        </p>
        <button className="back-button">Volta</button>
      </div>
    </div>
  );
}

export default UserProfile;