import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './secoes/Hero/Hero.jsx'
import Sobre_mim from './secoes/Sobre_mim/SobreMim'
import Scroll from './secoes/Scroll/Scroll'
import Projetos from './secoes/Projetos/Projetos.jsx'
import Timeline from './secoes/Timeline/Timeline.jsx'   
import Contato from './secoes/Contato/Contato.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <Sobre_mim/>
    <Scroll/>
    <Projetos/>
    <Timeline/>
    <Contato/>

  </StrictMode>,
)