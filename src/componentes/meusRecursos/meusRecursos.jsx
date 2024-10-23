import { MenulateralHome } from "../menuLateralHome/menuLateralHome"
import "./meusRecursos.css"

export function Listameusrecursos() {

  return (
    <div className="grid-duplo">
      <MenulateralHome />
      <div className="bloco">
        <div className="meus-recursos">
          <h1>Aqui e Lista dos meus os recursos</h1>
        </div>
      </div>
    </div>
  )
}