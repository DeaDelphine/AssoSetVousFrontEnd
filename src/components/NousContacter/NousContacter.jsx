import { useState } from 'react';
import sendFetch from '../../hooks/useFetch';


const NousContacter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        copy: false,
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await sendFetch('POST', '/api/send-email', formData);
            console.log(response);
            alert('Email envoyé avec succès!');
            setFormData({
                name: '',
                email: '',
                message: '',
                copy: false,
            });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            alert('Erreur lors de l\'envoi de l\'email.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border-white rounded p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    id="copy"
                                    checked={formData.copy}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="copy">
                                    Envoyez-moi une copie de ce message
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NousContacter;
