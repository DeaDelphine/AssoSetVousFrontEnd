import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';


const Associations = () => {
    const [associations, setAssociations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAssociations = async () => {
            try {
                const data = await useFetch('GET', '/api/associations');
                setAssociations(data);
                console.log(data);
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
                                  <a href="#" className="btn btn-dark">Voir l'association</a>
                              </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Associations