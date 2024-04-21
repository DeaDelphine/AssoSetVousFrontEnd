/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';

export const PageAssociation = () => {
    const location = useLocation();
    const { state } = location;
    const [association, setAssociation] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchAssociation = async () => {
            try {
                const data = await useFetch('GET', `/api/association/${state.from}`);
                setAssociation(data);
            } catch (error) {
                setError(error);

            }
        };
        fetchAssociation();
    }, []);

    return (
        <div className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid mb-5" src={association.profileImage} alt={association.name} />
                        <hr className="border border-dark" />
                        <h4 className="text-muted d-flex justify-content-between align-items-center">
                            <p className="m-0"><small style={{ "fontSize": "1rem", "marginRight": "1rem" }}></small>{association.name} </p>
                        </h4>
                        <hr className="border border-dark mb-5" />
                        <p>{association.content}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
