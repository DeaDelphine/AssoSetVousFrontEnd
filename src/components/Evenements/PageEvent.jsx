/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';

const PageEvent = () => {
  const location = useLocation();
  const { state } = location;
  const [evenement, setEvenement] = useState([]);
  const [error, setError] = useState(null);
  console.log(state);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await useFetch('GET', `/api/event/${state.from}`);
        setEvenement(data);
      } catch (error) {
        setError(error);

      }
    };
    fetchEvent();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="img-fluid mb-5" src={evenement.image} alt={evenement.title} />
            <hr className="border border-dark" />
            <h4 className="text-muted d-flex justify-content-between align-items-center">
              <p className="m-0"><small style={{ "fontSize": "1rem", "marginRight": "1rem" }}></small>{evenement.title} </p>
              <p className="m-0"><small style={{ "fontSize": "1rem", "marginRight": "1rem" }}></small>{formatDate(evenement.dateStart)} </p>
              <p className="m-0"><small style={{ "fontSize": "1rem", "marginRight": "1rem" }}></small>{formatDate(evenement.dateEnd)} </p>
            </h4>
            <hr className="border border-dark mb-5" />
            <p>{evenement.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageEvent;