/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from 'react';

const FilterComponent = ({ onSearch, onDateChange, onAssociationChange, onSearchChange, associations }) => {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [association, setAssociation] = useState('');
    const [searchAssociation, setSearchAssociation] = useState('');

    const handleSearch = () => {
        onSearch(searchTitle);
    };

    const handleDateChange = (e) => {
        setStartDate(e.target.value);
        onDateChange(e.target.value);
    };

    const handleAssociationChange = (e) => {
        setAssociation(e.target.value);
        onAssociationChange(e.target.value);
    };

    return (
        <div className="mb-4">
            <div className="row">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Rechercher par titre"
                        value={searchTitle}
                        onChange={(e) => {
                            setSearchTitle(e.target.value);
                            onSearchChange(e); 
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Date de début"
                        value={searchDate}
                        onChange={(e) => {
                            setSearchDate(e.target.value);
                            onDateChange(e.target.value);
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        value={searchAssociation}
                        onChange={(e) => {
                            setSearchAssociation(e.target.value);
                            onAssociationChange(e.target.value);
                        }}
                    >
                        <option value="">Toutes les associations</option>
                        {associations.map((association) => (
                            <option key={association.id} value={association.id}>
                                {association.name}
                            </option>
                        ))}
                        
                    </select>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-12">
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Rechercher
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
