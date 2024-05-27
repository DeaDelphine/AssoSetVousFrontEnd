/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { NavLink, useLocation } from 'react-router-dom';

const EventsByAsso = () => {
    const location = useLocation();
    const { state } = location;
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchEventsByAssociation = async () => {
            try {
                const data = await useFetch('GET', `/api/events/association/${state.from}`);
                setEvents(data);
            } catch (error) {
                setError(error);

            }
        };
        fetchEventsByAssociation();
    }, []);
  return (
     
              <div className="container my-5">
                  <div className="row justify-content-center">
                      <div className="title_page text-center">{state.categoryName}</div>
                      <table className="table">
                          <thead>
                              <tr>
                                  <th>Image</th>
                                  <th>Titre</th>
                                  <th>Début du contenu</th>
                                  <th>Date de début</th>
                                  <th>Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                      {events.map((event, index) => (
                                  <tr key={index}>
                              <td><img src={event.image} alt={event.name} style={{ width: '50px', height: '50px' }} /></td>
                              <td>{event.title}</td>
                              <td>{event.content.slice(0, 50)}...</td>
                              <td>{new Date(event.dateStart).toLocaleDateString()}</td>
                                      <td>
                                  <NavLink className="btn btn-dark me-2" to={`/evenement/${event.id}`} state={{ from: event.id }}>Voir l'évènement</NavLink>
                                          <button className="btn btn-primary">S'inscrire</button>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
              );
}

export default EventsByAsso