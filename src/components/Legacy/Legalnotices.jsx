function Legalnotices() {
    return ( 
        <div className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white text-center">
            <h2 className="h3">Mentions Légales</h2>
            <p className="mb-0">Dernière mise à jour : <strong>22/11/2024</strong></p>
          </div>
          <div className="card-body">
            <section className="mb-4">
              <h3 className="h5">1. Éditeur du site</h3>
              <p>
                Le site <strong>Asso'S et Vous</strong> est édité par <strong>Delphine De Alba</strong>.
              </p>
              <p>
                <strong>Coordonnées :</strong>
                <ul>
                  <li>Adresse : Rennes, France</li>
                  <li>Email : <a href="mailto:contact@assosetvous.fr">contact@assosetvous.fr</a></li>
                </ul>
              </p>
            </section>
            <section className="mb-4">
              <h3 className="h5">2. Hébergeur du site</h3>
              <p>
                Le site est hébergé par : <strong>OVH</strong>.
              </p>
            </section>
            <section className="mb-4">
              <h3 className="h5">3. Propriété intellectuelle</h3>
              <p>
                L’ensemble des contenus (textes, images, logos, vidéos) présents sur le site <strong>Asso'S et Vous</strong>
                est protégé par le droit d’auteur et reste la propriété exclusive de l’éditeur, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable.
              </p>
            </section>
            <section className="mb-4">
              <h3 className="h5">4. Limitation de responsabilité</h3>
              <p>
                L’éditeur ne peut être tenu responsable des dommages directs ou indirects causés au matériel de l’utilisateur,
                lors de l’accès au site, résultant soit de l’utilisation d’un matériel inapproprié, soit de l’apparition d’un bug ou d’une incompatibilité.
              </p>
              <p>
                Le site peut contenir des liens hypertextes vers d’autres sites. L’éditeur décline toute responsabilité quant au contenu de ces sites externes.
              </p>
            </section>
            <section className="mb-4">
              <h3 className="h5">5. Données personnelles</h3>
              <p>
                Les données personnelles collectées sur le site sont traitées conformément au Règlement Général sur la Protection des Données (RGPD).
                Pour plus d'informations, consultez notre <a href="/privacy-policy" className="link-primary">Politique de Confidentialité</a>.
              </p>
            </section>
            <section className="mb-4">
              <h3 className="h5">6. Contact</h3>
              <p>
                Pour toute question ou demande relative aux mentions légales, vous pouvez nous contacter :
              </p>
              <ul>
                <li>Email : <a href="mailto:contact@assosetvous.fr">contact@assosetvous.fr</a></li>
                <li>Adresse : Rennes, France</li>
              </ul>
            </section>
          </div>
          <div className="card-footer text-center">
            <p className="mb-0">© 2024 Asso'S et Vous - Tous droits réservés.</p>
          </div>
        </div>
      </div> 
    )
}
export default Legalnotices