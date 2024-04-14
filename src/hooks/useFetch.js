import axios from 'axios';

/**
 * Hook pour aller chercher les données dans le back
 * 
 * @param {string} method accepté : GET ou POST
 * @param {string} fetchRoute le nom de la route à appeler
 * @param {object} dataToSend les données à envoyer si nécessaire
 * @returns {Promise}
 */
const useFetch = async (method, fetchRoute, dataToSend = {}) => {
    // Vérification des données envoyées
    try {
        if (method !== 'POST' && method !== 'GET') {
            throw new Error('Invalid HTTP method');
        }
        const isObject = Object.prototype.toString.call(dataToSend).indexOf("Object") > -1;
        if (!isObject) {
            throw new Error('Invalid data format');
        }
    } catch (e) {
        console.log(e.message);
        return false;
    }

    let config = {
        method: method,
        url: `http://localhost:8000${fetchRoute}`,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (method === 'GET') {
        config.params = dataToSend;
    } else if (method === 'POST') {
        config.data = dataToSend;
    }

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.log('Axios Error!', error);
        throw error;
    }
};

export default useFetch;
