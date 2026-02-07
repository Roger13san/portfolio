import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Introducao from './secoes/introducao/introducao'
import Sobre_mim from './secoes/Sobre_mim/SobreMim'
import Scroll from './secoes/Scroll/Scroll'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Introducao/>
    <Sobre_mim/>
    
    <Scroll/>
  </StrictMode>,
)