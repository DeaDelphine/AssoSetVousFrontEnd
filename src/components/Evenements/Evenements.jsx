/* eslint-disable react/no-unescaped-entities */
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
      console.log(titleMatch);
      console.log(dateMatch);
      console.log(assoIdMatch);
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


  return (
    <div className="container my-5">
      <div className="row justify-content-center">
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
        {noResults && !loading &&(
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
