

const LogoutButton = () => {
    const handleLogout = () => {
        // Ici, vous pouvez envoyer une requête de déconnexion au backend Symfony
        console.log('Déconnexion en cours...');
    };

    return (
        <button className="btn btn-danger" onClick={handleLogout}>Déconnexion</button>
    );
};

export default LogoutButton;
