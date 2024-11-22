import { useState } from "react";

function CookieManagement() {
    const [preferences, setPreferences] = useState({
        essential: true,
        analytics: false,
        marketing: false,
      });
    
      // Gestion de la mise à jour des préférences
      const handleToggle = (type) => {
        setPreferences((prev) => ({
          ...prev,
          [type]: !prev[type],
        }));
      };
    
      // Enregistrement des préférences
      const savePreferences = () => {
        console.log("Préférences sauvegardées :", preferences);
        alert("Vos préférences ont été sauvegardées !");
      };
          return (
            <div className="container mt-5">
              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white text-center">
                  <h2 className="h3">Gestion des Cookies</h2>
                  <p className="mb-0">Personnalisez vos préférences de cookies</p>
                </div>
                <div className="card-body">
                  <section className="mb-4">
                    <h3 className="h5">Que sont les cookies ?</h3>
                    <p>
                      Les cookies sont de petits fichiers texte stockés sur votre appareil pour améliorer votre expérience de navigation,
                      analyser l'utilisation du site ou afficher des publicités adaptées à vos intérêts.
                    </p>
                  </section>
                  <section className="mb-4">
                    <h3 className="h5">Nos catégories de cookies</h3>
                    <ul className="list-group mb-3">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <strong>Cookies essentiels</strong>
                          <p className="mb-0 text-muted">Nécessaires pour le bon fonctionnement du site. Ces cookies ne peuvent pas être désactivés.</p>
                        </div>
                        <span className="badge bg-success">Activés</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <strong>Cookies analytiques</strong>
                          <p className="mb-0 text-muted">Utilisés pour comprendre et améliorer les performances du site.</p>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="analytics"
                            checked={preferences.analytics}
                            onChange={() => handleToggle("analytics")}
                          />
                          <label className="form-check-label" htmlFor="analytics">Activer</label>
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <strong>Cookies marketing</strong>
                          <p className="mb-0 text-muted">Utilisés pour afficher des publicités pertinentes en fonction de vos intérêts.</p>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="marketing"
                            checked={preferences.marketing}
                            onChange={() => handleToggle("marketing")}
                          />
                          <label className="form-check-label" htmlFor="marketing">Activer</label>
                        </div>
                      </li>
                    </ul>
                  </section>
                  <section>
                    <button className="btn btn-primary" onClick={savePreferences}>
                      Sauvegarder mes préférences
                    </button>
                  </section>
                </div>
                <div className="card-footer text-center">
                  <p className="mb-0">© 2024 Asso'S et Vous - Tous droits réservés.</p>
                </div>
              </div>
            </div>
          )
        }
 
export default CookieManagement