import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const Associations = () => {
    const [associations, setAssociations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAssociations = async () => {
            try {
                const data = await useFetch('GET', '/associations/getAll');
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
              {associations.map((association, index) => (
                  <div key={index} className="col-md-4 mb-4">
                      <div className="position-relative">
                          <div>
                              <img src={association.profileImage} alt={association.name} />
                              <div>{association.name}</div>
                              <div>{association.content}</div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Associations