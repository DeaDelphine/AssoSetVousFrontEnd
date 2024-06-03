/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import useFetch from '../../hooks/useFetch';
import { useNavigate } from "react-router-dom";

const Register = ({ addNotificationMessages }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "Le prénom est requis";
        if (!formData.lastName) tempErrors.lastName = "Le nom est requis";
        if (!formData.email) {
            tempErrors.email = "L'email est requis";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Le format de l'email est invalide";
        }
        if (!formData.phone) {
            tempErrors.phone = "Le numéro de téléphone est requis";
        } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
            tempErrors.phone = "Le numéro de téléphone doit être valide et contenir entre 10 et 15 chiffres.";
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/;
        if (!formData.password) {
            tempErrors.password = "Le mot de passe est requis";
        } else if (!passwordRegex.test(formData.password)) {
            tempErrors.password = "Le mot de passe doit contenir au moins 12 caractères, une lettre, un chiffre et un caractère spécial";
        }
        if (!formData.confirmPassword) {
            tempErrors.confirmPassword = "La confirmation du mot de passe est requise";
        } else if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = "Les mots de passe ne correspondent pas";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        try {
            const response = await useFetch('POST', '/api/register', formData);
            if (response) {
                addNotificationMessages(response.message, 'success');

                navigate('/login');
            }
        } catch (error) {
            addNotificationMessages(error.message, 'error');
            console.error('Error calling API:', error);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Inscription</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">Prénom</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                                    {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Nom</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                                    {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Téléphone</label>
                                    <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">S'inscrire</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
