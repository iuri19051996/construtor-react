import "./menuLateralRecursos.css"
import { Link } from 'react-router-dom';

export function MenulateralRecursos() {

  return (
      <>
        <div className="menu-lateralRecursos">
          <button className="btn-conteudo">
            Conteudo
          </button>
          <button className="btn-cores">
            Cores
          </button>
          <button className="btn-salvar">
            Salvar
          </button>

          <Link to="/">
            <button className="btn-voltarHome">
              Home
            </button>
          </Link>
        </div>
      </>
    )
}