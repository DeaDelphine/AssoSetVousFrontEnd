/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const FilterComponent = ({ onDateChange, onAssociationChange, onSearchChange, associations, title, date, assoId }) => {

    return (
        <div className="mb-4">
            <div className="row">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Rechercher par titre"
                        value={title}
                        onChange={onSearchChange}
                    />
                </div>
                <div className="col-md-4">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Date de début"
                        value={date}
                        onChange={onDateChange}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        value={assoId}
                        onChange={onAssociationChange}
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
        </div>
    );
};

export default FilterComponent;
