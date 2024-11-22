function PrivacyPolicy() {
    return (
        <div className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white text-center">
            <h2 className="h3">Politique de Confidentialité</h2>
            <p className="mb-0">Dernière mise à jour : <strong>22/11/2024</strong></p>
          </div>
          <div className="card-body">
            <section className="mb-4">
              <h3 className="h5">1. Responsable du traitement</h3>
              <p>
                L'éditeur du site, <strong>Delphine De Alba</strong>, est responsable du traitement des données
                personnelles collectées sur le site <strong>Asso'S et Vous</strong>.
              </p>
              <p>
                <strong>Contact :</strong>
                <ul>
                  <li>Email : <a href="mailto:contact@assosetvous.fr">contact@assosetvous.fr</a></li>
                  <li>Adresse : Rennes, France</li>
                </ul>
              </p>
            </section>
            <section className="mb-4">
              <h3 className="h5">2. Données collectées</h3>
              <p>Lors de l'utilisation du site, les données suivantes peuvent être collectées :</p>
              <ul>
                <li><strong>Informations d'identité :</strong> nom, prénom, email, numéro de téléphone.</li>
                <li><strong>Informations de connexion :</strong> adresse IP, type de navigateur, historique de navigation.</li>
                <li><strong>Informations relatives aux services :</strong> participation à des événements, dons effectués, etc.</li>
              </ul>
            </section>
            <section className="mb-4">
              <h3 className="h5">3. Finalités du traitement</h3>
              <p>Les données personnelles sont collectées pour :</p>
              <ul>
                <li>Gérer les inscriptions aux événements.</li>
                <li>Faciliter les dons et les paiements en ligne.</li>
                <li>Améliorer l'expérience utilisateur et personnaliser les services.</li>
                <li>Envoyer des communications (emails, newsletters) en lien avec les activités du site.</li>
              </ul>
            </section>
            <section className="mb-4">
              <h3 className="h5">4. Partage des données</h3>
              <p>
                Les données personnelles ne sont pas transmises à des tiers sans le consentement préalable de
                l'utilisateur, sauf dans les cas suivants :
              </p>
              <ul>
                <li>Respect des obligations légales.</li>
                <li>Partenariats avec des fournisseurs pour la gestion des événements.</li>
              </ul>
            </section>
            <section className="mb-4">
              <h3 className="h5">5. Durée de conservation</h3>
              <p>
                Les données personnelles sont conservées uniquement pour la durée nécessaire aux finalités décrites
                dans cette politique ou conformément aux exigences légales.
              </p>
            </section>
            <section className="mb-4">
              <h3 className="h5">6. Droits de l'utilisateur</h3>
              <p>L'utilisateur dispose des droits suivants :</p>
              <ul>
                <li><strong>Droit d'accès :</strong> consulter les données collectées.</li>
                <li><strong>Droit de rectification :</strong> corriger les données incorrectes ou incomplètes.</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression des données personnelles.</li>
                <li><strong>Droit d'opposition :</strong> refuser le traitement des données dans certaines conditions.</li>
                <li><strong>Droit à la portabilité :</strong> recevoir une copie des données dans un format structuré.</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à l'adresse :{" "}
                <a href="mailto:contact@assosetvous.fr">contact@assosetvous.fr</a>.
              </p>
            </section>
            <section>
              <h3 className="h5">7. Cookies</h3>
              <p>
                Le site utilise des cookies pour améliorer la navigation et analyser la fréquentation. L'utilisateur peut
                configurer son navigateur pour refuser les cookies, bien que cela puisse limiter certaines fonctionnalités.
              </p>
            </section>
          </div>
          <div className="card-footer text-center">
            <p className="mb-0">© 2024 Asso'S et Vous - Tous droits réservés.</p>
          </div>
        </div>
      </div>
    );
  };
export default PrivacyPolicy