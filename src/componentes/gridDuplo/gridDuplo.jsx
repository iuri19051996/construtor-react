import { MenulateralHome } from "../menuLateralHome/menuLateralHome";
import { Link } from 'react-router-dom';
import "./gridDuplo.css";

export function Gridduplo() {
    return (
        <div className="grid-duplo">
                <MenulateralHome />
                <div className="teste">
                <div className="rotas-recursos">
                    <Link to="/quiz">
                        <button>
                            Quiz
                        </button>
                    </Link>
                    <Link to="/memoria">
                        <button>
                            Memoria
                        </button>
                    </Link>
                </div>
                </div>
                
        </div>
    );
}