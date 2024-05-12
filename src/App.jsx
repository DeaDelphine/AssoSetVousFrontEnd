
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Associations from './components/Associations/Associations'
import Evènements from './components/Evenements/Evenements'
import MonEspace from './components/MonEspace/MonEspace'
import NousContacter from './components/NousContacter/NousContacter'
import { PageAssociation } from './components/Associations/PageAssociation'
import PageEvent from './components/Evenements/PageEvent'
import CategoryPage from './components/Categories/CategoryPage'
import EventsByAsso from './components/Evenements/EventsByAsso'
import EventRegistrationForm from './components/Form/EventRegistrationForm'
import LoginPage from './components/User/LoginPage'
import { useState } from 'react'
import Register from './components/User/Register'


function App() {
  // État pour vérifier si l'utilisateur est connecté
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleIsAuthenticated = () => {
    setIsAuthenticated(!isAuthenticated);
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
            <Route exact path="/evenements" element={<Evènements />} />
            <Route exact path="/evenements/association/:association" element={<EventsByAsso />} />
            <Route exact path="/monEspace" element={<MonEspace />} />
            <Route exact path="/association/:associationSlug" element={<PageAssociation />} />
            <Route exact path="/evenement/:id" element={<PageEvent />} />
            <Route exact path="/evenement/register" element={<EventRegistrationForm />} />
          </>
        )}
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/nousContacter" element={<NousContacter />} />
        </Routes>
      <Footer />
        
    </>
  )
}

export default App
