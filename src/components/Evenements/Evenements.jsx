/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';
import FilterComponent from './FiltersSearch';

const Evenements = () => {
  const [evenements, setEvenements] = useState([]);
  const [error, setError] = useState(null);
  const [originalEvents, setOriginalEvents] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [associations, setAssociations] = useState([]);

  useEffect(() => {
    try {
      useFetch('GET', '/api/events').then((data) => {
        setEvenements(data);
        setOriginalEvents(data);
        console.log(data);
      });
      useFetch('GET', '/api/associations').then((data) => {
        setAssociations(data);
      });
    } catch (err) {
      setError(err);
    }
  }, []);
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm.trim() === '') {
      setEvenements(originalEvents);
      setNoResults(false); 
    }
  };
 
  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setEvenements(originalEvents); 
      setNoResults(false);
      return;
    }
    const filteredEvenements = originalEvents.filter((evenement) =>
      evenement.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setEvenements(filteredEvenements);
    setNoResults(filteredEvenements.length === 0);
  };

  const handleDateChange = (date) => {
    if (date.trim() === '') {
      setEvenements(originalEvents);
      setNoResults(false); 
      return;
    }

    const filteredEvenements = originalEvents.filter((evenement) =>
      new Date(evenement.dateStart).toLocaleDateString() === new Date(date).toLocaleDateString()
    );

    setEvenements(filteredEvenements);

    setNoResults(filteredEvenements.length === 0);
  };

  const handleAssociationChange = (associations) => {
    if (associations.trim() === '') {
      setEvenements(originalEvents);
      setNoResults(false); 
      return;
    }

    const filteredEvenements = originalEvents.filter((evenement) => {
      evenement.assoId == associations
    }
    );


    setEvenements(filteredEvenements);

    
    setNoResults(filteredEvenements.length === 0);
  };


  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="title_page text-center">Nos évènements</div>
        <FilterComponent
          onSearch={handleSearch}
          onSearchChange={handleSearchChange}
          onDateChange={handleDateChange}
          onAssociationChange={handleAssociationChange}
          associations={associations}
        />
        {noResults && (
          <div className="alert alert-warning mt-3" role="alert">
            Aucun résultat trouvé.
          </div>
        )}
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
            {console.log(evenements)}
            {evenements.map((evenement, index) => (
              <tr key={index}>
                <td><img src={evenement.event.image} alt={evenement.event.title} style={{ width: '50px', height: '50px' }} /></td>
                <td>{evenement.event.title}</td>
                <td>{evenement.event.content.slice(0, 50)}...</td>
                <td>{new Date(evenement.event.dateStart).toLocaleDateString()}</td>
                <td>
                  <NavLink className="btn btn-dark me-2" to={`/evenement/${evenement.event.id}`} state={{ from: evenement.event.id }}>Voir l'évènement</NavLink>
                  <button className="btn btn-primary">S'inscrire</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Evenements;
