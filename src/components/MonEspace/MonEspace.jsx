/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";


const MonEspace = () => {

  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await useFetch('GET', '/api/myProfile');
        setUser(profileData.user);
        
        if (profileData.user) {
          const eventsData = await useFetch('GET', `/api/myProfile/${profileData.user.id}/events`);
          setEvents(eventsData);
        }
      } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div className="container mt-5">Chargement...</div>;
  }

  if (error) {
    return <div className="container mt-5">Erreur: {error}</div>;
  }

  if (!user) {
    return <div className="container mt-5">Aucun profil trouvé.</div>;
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = {
      timeZone: "UTC",
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleString('fr-FR', options);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Bienvenue sur votre espace {user.firstName} !</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">Informations personnelles</h5>
          <p className="card-text"><strong>Prénom:</strong> {user.firstName}</p>
          <p className="card-text"><strong>Nom:</strong> {user.lastName}</p>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>Téléphone:</strong> {user.phone}</p>
          <h5 className="card-title mt-4">Événements auxquels vous êtes inscrits :</h5>
          {events.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Evenement :</th>
                  <th>Date et heure de début : </th>
                  <th>Date et heure de fin :  </th>
                  <th>Actions :</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.title}</td>
                    <td>{formatDate(event.dateStart)}</td>
                    <td>{formatDate(event.dateEnd)}</td>
                    <td>
                      <NavLink to={`/evenement/${event.id}`} className="btn btn-primary" state={{ from: event.id }}>Voir l'évènement</NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Vous n'êtes inscrit à aucun événement.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonEspace;
