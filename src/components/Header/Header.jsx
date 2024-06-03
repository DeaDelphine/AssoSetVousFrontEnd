/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

import {  NavLink } from "react-router-dom"
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';


function Header({ handleIsAuthenticated, isAuthenticated }) {
  const navigate = useNavigate(); 


  const handleLogout = async () => {
    try {
      // Appel la route API pour la déconnexion en utilisant useFetch
      const response = await useFetch('POST', '/api/logout');
      if (response){
      // Gére la réponse en fonction de ce que l'API renvoie
        handleIsAuthenticated();
      // Redirige l'utilisateur vers la page d'accueil
        navigate('/connection');
      }
    } catch (error) {
      // Gérez les erreurs
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={Logo} alt="Logo Asso's" className="img-fluid" id="logo" />
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
                  {isAuthenticated &&
                    <>
                    <li><NavLink className="dropdown-item" onClick={handleLogout}>Déconnexion</NavLink></li>                   
                    <li><NavLink className="dropdown-item" to="/monProfil">Mon Profil</NavLink></li>
                    </>
                  }
                  {!isAuthenticated &&
                    <>
                      <li><NavLink className="dropdown-item" to="/connection">Connexion</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/inscription">Inscription</NavLink></li>
                    </>
                  }
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
