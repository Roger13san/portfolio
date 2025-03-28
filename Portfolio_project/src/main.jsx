import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Introducao from './secoes/introducao/introducao'
import Sobre_mim from './secoes/sobre_mim/sobre_mim'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Introducao/>
    <Sobre_mim/>
  </StrictMode>,
)