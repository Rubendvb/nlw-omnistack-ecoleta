import { FiLogIn } from 'react-icons/fi'

import Logo from '../../assets/logo.svg'

import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={Logo} alt="Ecoleta" />
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>

          <Link to={'/create-point'}>
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}
