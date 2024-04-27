/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { NavLink, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const PageEvent = () => {
  const location = useLocation();
  const { state } = location;
  const [evenement, setEvenement] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await useFetch('GET', `/api/event/${state.from}`);
        console.log(data);
        setEvenement(data);
      } catch (error) {
        setError(error);

      }
    };
    fetchEvent();
  }, []);

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
    evenement.event &&
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 mt-4">
              <img className="img-fluid" src={evenement.event.image} alt={evenement.event.title} />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="text-muted">{evenement.event.title}</h4>
              <p>Début : {formatDate(evenement.event.dateStart)}</p>
              <p>Fin : {formatDate(evenement.event.dateEnd)}</p>
              <p>{evenement.event.content}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <NavLink to='/evenements' className="btn btn-dark me-md-2 mb-2">Retour</NavLink>
                <NavLink to={`/association/${evenement.assoId}`} className="btn btn-primary me-md-2 mb-2" state={{ from: evenement.assoId}}>Voir l'association</NavLink>
                <button className="btn btn-success mb-2">Je m'inscris</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageEvent;