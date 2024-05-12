
import { Route, Router, Routes } from 'react-router-dom'
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

function App() {
  

  return (
    <>
      
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/associations/category/:categorie" element={<CategoryPage />} />
        <Route exact path="/associations" element={<Associations />} />
        <Route exact path="/evenements" element={<Evènements />} />
        <Route exact path="/evenements/association/:association" element={<EventsByAsso />} />
        <Route exact path="/monEspace" element={<MonEspace />} />
        <Route exact path="/nousContacter" element={<NousContacter />} />
        <Route exact path="/association/:associationSlug" element={<PageAssociation />} />
        <Route exact path="/evenement/:id" element={<PageEvent />} />
        <Route exact path="/evenement/register" element={<EventRegistrationForm />} />
        <Route exact path="/connection" element={<LoginPage />} />
        </Routes>
        <Footer />
        
    </>
  )
}

export default App
