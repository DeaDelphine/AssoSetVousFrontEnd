/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const LoginPage = ({ handleIsAuthenticated }) => {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userData = {
                email: formData.email,
                password: formData.password
            };

            // Appel la route API pour la connexion en utilisant useFetch
            const response = await useFetch('POST', '/api/login', userData);
            
            if (response && response.token) {
                
                localStorage.setItem('token', response.token);
                handleIsAuthenticated();
                // Redirige l'utilisateur vers la page d'accueil
                navigate('/');
            } else {
                // Gére les cas où la connexion échoue
                console.log('La connexion a échoué.');
            }
        } catch (error) {
            // Gérez les erreurs
            console.error('Erreur lors de la connexion:', error);
        }
            
    };

    return (
        <div className="container">
            <h3 className='text-center mt-3'>Pour accéder aux différentes pages merci de vous connecter ou de vous inscrire.</h3>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Connexion</h2>      
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Se connecter</button>
                                </div>
                                <div>Pas encore inscrit ? <NavLink to="/inscription">Inscrivez-vous</NavLink></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
