import "./header.css"
import logo from "../../assets/logo.svg"

export function Header() {

    return (
      <header className="barra-topo">
        <div className="titulo-barraTopo">
          <h1>Construtor de</h1>
          <h2>Recursos Interativos</h2>
        </div>
        <img className="img-logo" src={logo} alt=""/>
        <button className="btn-toggle">
          Toggle
        </button>
      </header>
    )
}
  
