/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { fr } from 'date-fns/locale/fr';
import { useEffect, useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
registerLocale('fr', fr);

export const PageAssociation = () => {
    const location = useLocation();
    const { state } = location;
    const [association, setAssociation] = useState([]);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [eventDates, setEventDates] = useState([]);
    
    let navigate = useNavigate();

    useEffect(() => {
        const fetchAssociation = async () => {
            try {
                const data = await useFetch('GET', `/api/association/${state.from}`);
                setAssociation(data);
                const dates = data.event.map(event => {
                    let eventData = {};
                    if (event.dateStart) {
                        eventData.date = new Date(event.dateStart)
                    }
                    if (event.title) {
                        eventData.holidayName = event.title
                    }
                    if (event.id) {
                        eventData.id = event.id
                    }
                    return eventData;
                });
                setEventDates(dates);
                console.log(dates);
            } catch (error) {
                setError(error);

            }
        };
        fetchAssociation();
    }, []);

    const redirection = (date) => {
        const selectedHoliday = eventDates.find(event => {
            
            const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '');
            const otherDateToFormat = (event.date).toISOString().split('T')[0].replace(/-/g, '');
            if (otherDateToFormat=== formattedDate) return event;
           
            
        });
        
        if(selectedHoliday){
        return navigate(`/evenement/${selectedHoliday.id}`, {state:{from: selectedHoliday.id}})
        }
    }
   
    

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <img className="img-fluid mb-4" src={association.profileImage} alt={association.name} />
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                locale="fr"
                                inline
                                holidays={eventDates}
                                onSelect={redirection}
                            />
                        </div>
                        <div className="col-md-6 mt-4">
                            <h4 className="text-muted">{association.name}</h4>
                            <p>{association.content}</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <NavLink className='btn btn-warning me-md-2 mb-2' to={`/evenements/association/${association.id}`} state={{ from: association.id }}>Voir les évènements</NavLink>
                                <NavLink className='btn btn-info me-md-2 mb-2' to="/nous-contacter">Contacter l'association</NavLink>
                                <a className="btn btn-primary mb-2" href={association.website} target="_blank" rel="noopener noreferrer">Notre site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}
