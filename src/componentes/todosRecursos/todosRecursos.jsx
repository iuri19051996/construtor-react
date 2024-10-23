import { MenulateralHome } from "../menuLateralHome/menuLateralHome"
import "./todosRecursos.css"

export function Listatodosrecursos() {

  return (
    <div className="grid-duplo">
      <MenulateralHome />
      <div className="bloco">
        <div className="todos-recursos">
          <h1>Aqui e Lista de todos os recursos</h1>
        </div>
      </div>
    </div>
  )
}