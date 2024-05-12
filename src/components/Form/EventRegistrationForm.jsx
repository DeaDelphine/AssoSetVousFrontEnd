/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const EventRegistrationForm = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation des données
        const newErrors = {};
        if (formData.nom.trim() === '') {
            newErrors.nom = 'Le nom est requis.';
        }
        if (formData.prenom.trim() === '') {
            newErrors.prenom = 'Le prénom est requis.';
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Adresse e-mail invalide.';
        }
        if (!/^\d+$/.test(formData.telephone)) {
            newErrors.telephone = 'Numéro de téléphone invalide.';
        }
        // Si des erreurs sont présentes, on les affiche
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            useFetch('POST', `/api/event/register`, formData).then((response) => {
                console.log('Données envoyées :', formData);
                console.log(response);
        setFormData({
            nom: '',
            prenom: '',
            email: '',
            telephone: ''
        });
    setErrors({});
});
            
        }
    };

return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className='title_page text-center'>
                    Inscription à l'évènement
                </div>
                <form onSubmit={handleSubmit} className="border p-4 rounded shadow" style={{ backgroundColor: "#fff" }}>
                    {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                    <div className="mb-3">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input
                            type="text"
                            className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                        />
                        {errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="prenom" className="form-label">Prénom</label>
                        <input
                            type="text"
                            className={`form-control ${errors.prenom ? 'is-invalid' : ''}`}
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                        />
                        {errors.prenom && <div className="invalid-feedback">{errors.prenom}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telephone" className="form-label">Téléphone</label>
                        <input
                            type="tel"
                            className={`form-control ${errors.telephone ? 'is-invalid' : ''}`}
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                        />
                        {errors.telephone && <div className="invalid-feedback">{errors.telephone}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary">S'inscrire</button>
                </form>
            </div>
        </div>
    </div>
);
};

export default EventRegistrationForm;
