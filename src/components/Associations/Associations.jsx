/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';


const Associations = () => {
    const [associations, setAssociations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAssociations = async () => {
            try {
                const data = await useFetch('GET', '/api/associations');
                setAssociations(data);
            } catch (err) {
                setError(err);

            }
        };
        fetchAssociations();
    }, []);


  return (
      <div className="container my-5">
          <div className="row justify-content-center">
              <div className='title_page text-center'>
                  Les associations
              </div>
              {associations.map((association, index) => (
                  <div key={index} className="col-md-4 mb-4">
                      <div className="card" style={{"width": "18rem"}}>
                          <img src={association.profileImage} className="card-img-top" alt={association.name} />
                              <div className="card-body">
                              <h5 className="card-title">{association.name}</h5>
                              <p className="card-text text-truncate">{association.content}</p>
                              <NavLink className="btn btn-dark" to={`/association/${association.slug}`} state={{from: association.id}}>Voir l'association</NavLink>
                              </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Associations