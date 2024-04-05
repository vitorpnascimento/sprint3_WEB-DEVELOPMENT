import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Componentes/NavBar'
import Contacts from './Componentes/Contacts'
import Footer from './Componentes/Footer'
import Banner_como_vai_ser from './Como_vai_ser/Banner'
import Nosso_feedback from './Como_vai_ser/nosso_feedback'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Banner_como_vai_ser/>
    <Nosso_feedback />
    <Contacts />
    <Footer />
  </React.StrictMode>,
)
