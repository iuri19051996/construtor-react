import "./menuLateralRecursos.css"
import { Link } from 'react-router-dom';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { FaHome } from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";
import { FaRegSave } from "react-icons/fa";
import { LuFileEdit } from "react-icons/lu";
 
export function MenulateralRecursos() {
  const headerBgColor = useColorModeValue('header.light', 'header.dark');
  const menuIconColor = useColorModeValue('menu.light', 'menu.dark'); // Usar menuIconColor para a cor dos ícones.
 
  return (
    <>
      <Box className="menu-lateralHome" bg={headerBgColor}>
        <Link to="/meusrecursos">
          <Tooltip label={<span className='teste-span'>Conteúdos</span>} openDelay={0} closeDelay={0}>
          <Box as="button" className = "btn-home" borderBottomColor = {menuIconColor}>
            <Box as={ LuFileEdit } className = "icone" color = { menuIconColor } />
          </Box>
          </Tooltip>
        </Link>
 
        <Link to="/meusrecursos">
          <Tooltip label={<span className='teste-span'>Salvar</span>} openDelay={0} closeDelay={0}>
            <Box as="button" className = "btn-meusRecursos" borderBottomColor = {menuIconColor}>
              <Box as={FaRegSave } className="icone" color={menuIconColor} /> {/* Box Chakra como ícone */}
            </Box>
          </Tooltip>
        </Link>
 
        <Link to="/">
        <Tooltip label={<span className='teste-span'>Home</span>} openDelay={0} closeDelay={0}>
          <Box as="button" className = "btn-voltarLogin">
            <Box as={ FaHome } className = "icone" color = { menuIconColor } />
          </Box>
        </Tooltip>
        </Link>
      </Box>
    </>
  );
}