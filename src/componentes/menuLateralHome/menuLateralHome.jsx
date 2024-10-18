import { Link } from 'react-router-dom';
import "./menuLateralHome.css"

export function MenulateralHome() {

  return (
      <>
        <div className="menu-lateralHome">
          <Link to="/">
            <button className="btn-home">
              Home
            </button>
          </Link>
          <Link to="/todosrecursos">
            <button className="btn-todosRecursos">
              Todos os Recursos
            </button>
          </Link>
          <Link to="/meusrecursos">
            <button className="btn-meusRecursos">
              Meus recursos
            </button>
          </Link>

          <button className="btn-voltarLogin">
            Voltar Login
          </button>
        </div>
      </>
    )
}