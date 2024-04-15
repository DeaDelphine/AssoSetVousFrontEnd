import { Link, NavLink } from "react-router-dom"


/* eslint-disable react/no-unescaped-entities */
function Header() {
  return (<div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src="src\assets\images\Logo.png" alt="Logo Asso's" className="img-fluid" id="logo"/>
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
            <NavLink className="nav-link fs-5" to="/monEspace">Mon Espace</NavLink>
            <NavLink className="nav-link fs-5" to="/nousContacter">Nous contacter</NavLink>
              
      </div>
    </div>
  </div>
    </nav>
  
    
   
    </div>
 )
}

export default Header