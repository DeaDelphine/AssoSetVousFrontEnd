import nodemailer  from 'nodemailer';
import render from '@react-email/render';
import React from'react';
import ReactDOMServer from 'react-dom/server';
import EmailTemplate from './EmailTemplate';

// Configuration du transporteur Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ovh.net', 
    port: 465,
    secure: true, 
    auth: {
        user: 'contact@assosetvous.fr', 
        pass: 'assosetvous8844'         
    }
});

// Fonction pour envoyer l'email
const sendEmail = async (to, name) => {
    const emailContent = ReactDOMServer.renderToStaticMarkup(React.createElement(EmailTemplate, { name }));

    const mailOptions = {
        from: '"Nom de l\'expéditeur" <votre-email@domaine.com>', // Adresse de l'expéditeur
        to, // Adresse du destinataire
        subject: 'Sujet de l\'email',
        html: emailContent
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email envoyé: ' + info.response);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email: ' + error.message);
    }
};

// Appel de la fonction pour envoyer un email
sendEmail('dealbadelphine@gmail.com', 'Delphine De ALBA');
