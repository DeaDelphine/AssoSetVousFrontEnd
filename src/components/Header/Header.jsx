/* eslint-disable react/no-unescaped-entities */
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src="src\assets\images\Logo .png" alt="Logo Asso's" className="img-fluid" id="logo"/>
        <a className="navbar-brand" href="#">Asso'S & Vous</a>    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Accueil</a>
        <a className="nav-link" href="#">Les Associations</a>
                      <a className="nav-link" href="#">Les évènements</a>
                      <a className="nav-link" href="#">Les catégories</a>
                      <a className="nav-link" href="#">Mon Espace</a>
                      <a className="nav-link" href="#">Nous contacter</a>
      </div>
    </div>
  </div>
</nav>
 )
}

export default Header