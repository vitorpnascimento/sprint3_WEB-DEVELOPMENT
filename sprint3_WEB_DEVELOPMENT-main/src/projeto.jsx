import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './Componentes/NavBar'
import Banner_projeto from './projeto/Banner'
import Contacts from './Componentes/Contacts'
import Footer from './Componentes/Footer'
import Projeto from './projeto/comecando_projeto'
import Problema_escolhido from './projeto/problema_escolhido'
import Solucao_proposta from './projeto/solucao_proposta'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Banner_projeto />
    <Projeto />
    <Problema_escolhido />
    <Solucao_proposta />
    <Contacts />
    <Footer />
  </React.StrictMode>,
)
