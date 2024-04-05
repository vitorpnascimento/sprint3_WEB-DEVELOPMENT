import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Componentes/NavBar'
import Banner from './Componentes/Banner'
import Features from './Componentes/Features'
import Contacts from './Componentes/Contacts'
import Footer from './Componentes/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Banner/>
    <Features/>
    <Contacts/>
    <Footer/>
  </React.StrictMode>,
)
