/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './PopupMessage.css';
/**
 * Composant d'affichage du message de notification
 * 
 * @param {String} message : le message à afficher 
 * @param {CallableFunction} removeNotif : retire le message du tableau de notification
 * @returns 
 */
const PopupMessage = ({ message, removeNotif, notificationValue }) => {
    const [visible, setVisible] = useState(true);

    // Au chargement du composant on place un setTimeout sur le composant pour définir sa durée de vie
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(false);
            removeNotif(); // Appel de la fonction pour retirer la notification du tableau
        }, 5000);

        // Nettoyer le timeout lorsqu'on démonte le composant
        return () => clearTimeout(timeoutId);
    }, []);

    const icon = notificationValue === 'error' ? 'bi bi-x-circle-fill text-danger' : 'bi bi-check-circle-fill text-success';

    return visible && <div className="popupMessage">
        <i className={`${icon} icon`} aria-hidden="true"></i>
        <span>{message}</span>
            
    </div>
    
};

export default PopupMessage;