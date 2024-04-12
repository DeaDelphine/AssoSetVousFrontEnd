/* eslint-disable react/no-unescaped-entities */

function Footer() {
  return (
    <footer className="mt-4 pt-4 ">
    <div className="container border-top">
        <div className="row">
                  <div className="col-13 col-md">
                      <h5>Asso'S Et Vous</h5><small className="d-block text-muted">&copy;</small>
                
                
            </div>
            <div className="col-6 col-md">
                <h5>Nous Suivre</h5>
                <ul className="list-unstyled">
                    
                        <li>
                            <a href="#" className="text-muted">Facebook icone</a>
                          </li>
                            <li>
                            <a href="#" className="text-muted">X icone</a>
                          </li>
                            <li>
                            <a href="#" className="text-muted">Youtube icone</a>
                        </li>
                    
                </ul>
            </div>
            <div className="col-6 col-md">
                <ul className="list-unstyled">
                    <li><a href="contact.php" className="text-muted">Gestion des Cookies</a></li>
                    <li><a href="#" className="text-muted">Mentions légales</a></li>
                    <li><a href="#" className="text-muted">Politique de confidentialité</a></li>
                    <li><a href="#" className="text-muted">Conditions générales</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark">
        <div className="row">
            <div className="col">
                <p className="text-center text-white">&copy;Asso'S Et Vous  </p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer