
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Associations from './components/Associations/Associations'
import { PageAssociation } from './components/Associations/PageAssociation'
import Categories from './components/Categories/Categories'
import CategoryPage from './components/Categories/CategoryPage'
import Evenements from './components/Evenements/Evenements'
import EventsByAsso from './components/Evenements/EventsByAsso'
import PageEvent from './components/Evenements/PageEvent'
import Footer from './components/Footer/Footer'
import EventRegistrationForm from './components/Form/EventRegistrationForm'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MonEspace from './components/MonEspace/MonEspace'
import NousContacter from './components/NousContacter/NousContacter'
import LoginPage from './components/User/LoginPage'
import Register from './components/User/Register'
import PopupMessage from './components/default/PopupMessage'
import customFetch from './hooks/useFetch'


function App() {
  // État pour vérifier si l'utilisateur est connecté
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkedToken, setCheckedToken] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await customFetch('POST', '/verify-token', { token: localStorage.getItem('AssosToken') });
        if (response.status == 200) handleIsAuthenticated(true);
        else handleIsAuthenticated(false);
      } catch (err) {
        console.error('Error not logged');
      } finally {
        setCheckedToken(true);
      }
    };
    // au chargement si on a un token on le vérifie pour reconneceter l'utilisateur
    if (localStorage.getItem('AssosToken')) verifyToken();
    else setCheckedToken(true);
  }, []);


  const handleIsAuthenticated = (value) => {
    if (value) setIsAuthenticated(value);
    else setIsAuthenticated(!isAuthenticated);
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
        {!isAuthenticated && checkedToken &&

          <Route path="/*" element={<LoginPage handleIsAuthenticated={handleIsAuthenticated} />} />

        }
        {isAuthenticated && (
          <>
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/associations/category/:categorie" element={<CategoryPage addNotificationMessages={addNotificationMessages} />} />
            <Route exact path="/associations" element={<Associations />} />
            <Route exact path="/evenements" element={<Evenements />} />
            <Route exact path="/evenements/association/:association" element={<EventsByAsso addNotificationMessages={addNotificationMessages} />} />
            <Route exact path="/monProfil" element={<MonEspace />} />
            <Route exact path="/association/:associationSlug" element={<PageAssociation />} />
            <Route exact path="/evenement/:id" element={<PageEvent />} />
            <Route exact path="/evenement/register" element={<EventRegistrationForm />} />
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
