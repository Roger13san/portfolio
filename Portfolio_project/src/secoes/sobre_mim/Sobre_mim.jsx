import { useState } from 'react'
import './Sobre_mim.css'

function Sobre_mim() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="sobre">
        <h3>Sobre mim</h3>
        <p>Olá! Meu nome é <a href="">Roger Rodrigues de Santana</a> , sou desenvolvedor <a href="">Full stack</a>  com foco em <a href="">back-end</a>. <br />
  Me formei em <a href="">Desenvolvimento de Sistemas</a>  pelo Instituto Germinare (2023–2025) e atuo na área desde 2024. Tenho experiência em construção de <span id= 'verde'>APIs</span> , DevOps, pipelines CI/CD, implantação de aplicações e gerenciamento de bancos de dados. <br />
  Também desenvolvo interfaces responsivas e funcionais no front-end, entregando soluções completas e eficientes. <br />
  Sou apaixonado por tecnologia, aprendizado contínuo e desafios que me façam evoluir como profissional.</p>
    </div>
      
    </>
  )
}

export default Sobre_mim
