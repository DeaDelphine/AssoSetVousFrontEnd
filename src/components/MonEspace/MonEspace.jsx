/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const MonEspace = () => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await useFetch('GET', '/api/myProfile');
        setUser(data.user);
        setEvents(data.events);
        console.log('Fetched data:', data);
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

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Profil de l'utilisateur</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">Informations personnelles</h5>
          <p className="card-text"><strong>Prénom:</strong> {user.firstName}</p>
          <p className="card-text"><strong>Nom:</strong> {user.lastName}</p>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>Téléphone:</strong> {user.phone}</p>
          <h5 className="card-title mt-4">Événements inscrits</h5>
          {events.length > 0 ? (
            <ul className="list-group">
              {events.map((event, index) => (
                <li key={index} className="list-group-item">
                  <strong>{event.title}</strong> - {new Date(event.dateStart).toLocaleDateString()}
                </li>
              ))}
            </ul>
          ) : (
            <p className="card-text">Aucun événement inscrit.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonEspace