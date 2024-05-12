import {  NavLink } from "react-router-dom"


import { useState } from 'react';

function Header() {
  // État pour vérifier si l'utilisateur est connecté
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // Code pour déconnecter l'utilisateur
    setIsAuthenticated(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src="src\assets\images\Logo.png" alt="Logo Asso's" className="img-fluid" id="logo" />
          <a className="navbar-brand" href="#">Asso'S & Vous</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link fs-5" to="/">Accueil</NavLink>
              <NavLink className="nav-link fs-5" to="/associations">Les Associations</NavLink>
              <NavLink className="nav-link fs-5" to="/evenements">Les évènements</NavLink>
              <NavLink className="nav-link fs-5" to="/categories">Les catégories</NavLink>
              <div className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mon Espace
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {!isAuthenticated ? (
                    <>
                      <li><NavLink className="dropdown-item" to="/connection">Connexion</NavLink></li>
                      <li><NavLink className="dropdown-item" href="#">Inscription</NavLink></li>
                    </>
                  ) : (
                    <li><button className="dropdown-item" onClick={handleLogout}>Déconnexion</button></li>
                  )}
                </ul>
              </div>
              <NavLink className="nav-link fs-5" to="/nousContacter">Nous contacter</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
