
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Associations from './components/Associations/Associations'
import Evenements from './components/Evenements/Evenements'
import MonEspace from './components/MonEspace/MonEspace'
import NousContacter from './components/NousContacter/NousContacter'
import { PageAssociation } from './components/Associations/PageAssociation'
import PageEvent from './components/Evenements/PageEvent'
import CategoryPage from './components/Categories/CategoryPage'
import EventsByAsso from './components/Evenements/EventsByAsso'
import LoginPage from './components/User/LoginPage'
import { useState } from 'react'
import Register from './components/User/Register'
import PopupMessage from './components/default/PopupMessage'


function App() {
  // État pour vérifier si l'utilisateur est connecté
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleIsAuthenticated = () => {
    setIsAuthenticated(!isAuthenticated);
  }

  // pour définir si la popup de notification est visible
  const [showPopupNotification, setShowPopupNotification] = useState(false);
  // tableau qui va contenir toutes les popup de messages
  const [notificationMessages, setNotificationMessages] = useState([]);

  // ajoute un message au tableau des notifications
  const addNotificationMessages = (message = '', notificationValue = null) => {
    const uniqKey = Math.random();
    if (message != '') setNotificationMessages([...notificationMessages, <PopupMessage
      notificationValue={notificationValue}
      key={uniqKey}
      message={message}
      removeNotif={() => removeNotificationMessages(uniqKey)}
    />]);
    setShowPopupNotification(true);
  }

  const removeNotificationMessages = (keyToRemove) => {
    let updatedMessages = [];
    setNotificationMessages((prevMessages) => {
      // Filtre les messages pour retirer celui avec la clé spécifiée
      updatedMessages = prevMessages.filter((message) => {
        return message.key != keyToRemove
      });
      return updatedMessages;
    });
    // lorsqu'il n'y a plus de messages à afficher, on retire le container
    if (updatedMessages.length == 0) {
      setShowPopupNotification(false);
    }
  }

  return (
    <>
      
      <Header handleIsAuthenticated={handleIsAuthenticated} isAuthenticated={isAuthenticated} />
      <Routes>
            <Route exact path="/" element={<Home />} />
        {!isAuthenticated &&
          
          <Route  path="/*" element={<LoginPage handleIsAuthenticated={handleIsAuthenticated} />} />
         
        }
        {isAuthenticated && (
          <>
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/associations/category/:categorie" element={<CategoryPage />} />
            <Route exact path="/associations" element={<Associations />} />
            <Route exact path="/evenements" element={<Evenements addNotificationMessages={addNotificationMessages} />} />
            <Route exact path="/evenements/association/:association" element={<EventsByAsso addNotificationMessages={addNotificationMessages} />} />
            <Route exact path="/monProfil" element={<MonEspace />} />
            <Route exact path="/association/:associationSlug" element={<PageAssociation />} />
            <Route exact path="/evenement/:id" element={<PageEvent addNotificationMessages={addNotificationMessages} />} />
          </>
        )}
        <Route exact path="/inscription" element={<Register addNotificationMessages={addNotificationMessages} />} />
            <Route exact path="/nousContacter" element={<NousContacter />} />
      </Routes>
      {showPopupNotification && <div className="popupMessage--container">
        {notificationMessages}
      </div>}
      <Footer />
        
    </>
  )
}

export default App
