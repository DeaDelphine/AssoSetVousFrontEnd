/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import FilterComponent from './FiltersSearch';

const Evenements = ({ addNotificationMessages }) => {
  const location = useLocation();
  const { state } = location;
  const [evenements, setEvenements] = useState([]);
  const [error, setError] = useState(null);
  const [originalEvents, setOriginalEvents] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [associations, setAssociations] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [assoId, setAssoId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      useFetch('GET', '/api/events').then((data) => {
        setEvenements(data);
        setNoResults(data.length === 0);
        setOriginalEvents(data);
      });
      useFetch('GET', '/api/associations').then((data) => {
        setAssociations(data);
      });
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, []);

  const filters = () => {
    const filteredEvenements = originalEvents.filter((item) => {
      const titleMatch = title == '' || item.event.title.toLowerCase().includes(title.toLowerCase());
      const dateMatch = date == '' || new Date(item.event.dateStart).toLocaleDateString() === new Date(date).toLocaleDateString();
      const assoIdMatch = assoId == '' || item.assoId && item.assoId.toString() === assoId.toString();
      return titleMatch && dateMatch && assoIdMatch;
    });
    setEvenements(filteredEvenements);
    setNoResults(filteredEvenements.length === 0);
  }

  useEffect(() => {
    filters();
  }, [title, date, assoId]);


  const handleSearchChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAssociationChange = (e) => {
    setAssoId(e.target.value);
  };

  const handleRegister = async (eventId) => {
    try {
      const response = await useFetch('POST', `/api/event/${eventId}/register`)
      
      addNotificationMessages(response.message, 'success');
    } catch (error) {
      addNotificationMessages(error.message, 'error');
    }
  };


  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="title_page text-center">Nos évènements</div>
          <FilterComponent
            onSearchChange={handleSearchChange}
            onDateChange={handleDateChange}
            onAssociationChange={handleAssociationChange}
            associations={associations}
            title={title}
            date={date}
            assoId={assoId}
          />
          {noResults && !loading && (
            <div className="alert alert-warning mt-3" role="alert">
              Aucun résultat trouvé.
            </div>
          )}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {evenements.map((evenement, index) => (
              <div key={index} className="col">
                <div className="card h-100">
                  <img src={evenement.event.image} className="card-img-top" alt={evenement.event.title} />
                  <div className="card-body">
                    <h5 className="card-title">{evenement.event.title}</h5>
                    <p className="card-text">{evenement.event.content.slice(0, 50)}...</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Date de début : {new Date(evenement.event.dateStart).toLocaleDateString()}</small>
                    <NavLink className="btn btn-dark me-2" to={`/evenement/${evenement.event.id}`} state={{ from: evenement.event.id }}>Voir l'évènement</NavLink>
                    <NavLink className="btn btn-primary" onClick={() => handleRegister(evenement.event.id)} >S'inscrire</NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evenements;
