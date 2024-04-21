/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */


import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';



const Evenements = () => {
  const [evenements, setEvenements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
      try {
        useFetch('GET', '/api/events').then((data) =>{
        setEvenements(data)
          console.log(data)
        }
      )
      } catch (err) {
        setError(err);

      }
   
  }, []);


  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className='title_page text-center'>
          Nos évènements
        </div>
        {evenements.map((evenement, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{ "width": "18rem" }}>
              <img src={evenement.image} className="card-img-top" alt={evenement.name} />
              <div className="card-body">
                <h5 className="card-title">{evenement.name}</h5>
                <p className="card-text text-truncate">{evenement.content}</p>
                <NavLink className="btn btn-dark" to={`/evenement/${evenement.id}`} state={{ from: evenement.id }}>Voir l'évènement</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Evenements