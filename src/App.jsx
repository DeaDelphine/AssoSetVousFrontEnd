
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Associations from './components/Associations/Associations'
import Evènements from './components/Evènements/Evènements'
import MonEspace from './components/MonEspace/MonEspace'
import NousContacter from './components/NousContacter/NousContacter'

function App() {
  

  return (
    <>
      
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/associations" element={<Associations />} />
        <Route exact path="/evenements" element={<Evènements />} />
        <Route exact path="/monEspace" element={<MonEspace />} />
        <Route exact path="/nousContacter" element={<NousContacter />} />
        </Routes>
        <Footer />
        
    </>
  )
}

export default App
