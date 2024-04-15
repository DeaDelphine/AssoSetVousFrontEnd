
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  

  return (
    <>
      
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/associations" element={<Categories />} />
        <Route exact path="/evenements" element={<Categories />} />
        <Route exact path="/monEspace" element={<Categories />} />
        <Route exact path="/nousContacter" element={<Categories />} />
        </Routes>
        <Footer />
        
    </>
  )
}

export default App
