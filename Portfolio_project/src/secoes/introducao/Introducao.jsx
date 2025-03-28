import { useState } from 'react'
import './Introducao.css'
import monkey from '../../assets/monkito.jpeg'

function Introducao() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="inicio">
        <div id='pega'>
            <h2 id='intro'>Roger Rodrigues de Santana <br />
            Desenvolvedor <a href="">FullStack</a> 
            </h2>
            <p id='z'> Profissional desde 2024</p>
        </div>
        
        
        <img src={monkey} alt="as" />
    </div>
      
    </>
  )
}

export default Introducao
