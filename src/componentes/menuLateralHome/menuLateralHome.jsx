import { Link } from 'react-router-dom';
import { Box, useColorModeValue } from '@chakra-ui/react';
import "./menuLateralHome.css"

export function MenulateralHome() {
  const headerBgColor = useColorModeValue('header.light', 'header.dark');
  
  return (
      <>
        <Box className="menu-lateralHome" bg={headerBgColor}>
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
        </Box>
      </>
    )
}