import { Link } from 'react-router-dom';
import { Box, useColorModeValue } from '@chakra-ui/react';
import "./menuLateralHome.css";
import { FaHome } from "react-icons/fa";
import { RiMenuSearchLine } from "react-icons/ri";
import { PiUserListBold } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import { Tooltip } from "@chakra-ui/react";
 
export function MenulateralHome() {
  const headerBgColor = useColorModeValue('header.light', 'header.dark');
  const menuIconColor = useColorModeValue('menu.light', 'menu.dark'); // Usar menuIconColor para a cor dos ícones.
 
  return (
    <>
      <Box className="menu-lateralHome" bg={headerBgColor}>
        <Link to="/">
          <Tooltip label={<span className='teste-span'>Home</span>} openDelay={0} closeDelay={0}>
          <Box as="button" className = "btn-home" borderBottomColor = {menuIconColor}>
            <Box as={ FaHome } className = "icone" color = { menuIconColor } />
          </Box>
          </Tooltip>
        </Link>
 
        <Link to="/todosrecursos">
          <Tooltip label={<span className='teste-span'>Todos <br /> os Recursos</span>} openDelay={0} closeDelay={0}>
            <Box as="button" className = "btn-todosRecursos" borderBottomColor = {menuIconColor}>
              <Box as={RiMenuSearchLine} className="icone" color={menuIconColor} /> {/* Box Chakra como ícone */}
            </Box>
          </Tooltip>
        </Link>
 
        <Link to="/meusrecursos">
          <Tooltip label={<span className='teste-span'>Meus <br /> recursos</span>} openDelay={0} closeDelay={0}>
            <Box as="button" className = "btn-meusRecursos" borderBottomColor = {menuIconColor}>
              <Box as={PiUserListBold} className="icone" color={menuIconColor} /> {/* Box Chakra como ícone */}
            </Box>
          </Tooltip>
        </Link>
 
        <Tooltip label={<span className='teste-span'>Logout</span>} openDelay={0} closeDelay={0}>
          <Box as="button" className = "btn-voltarLogin">
            <Box as={TbLogout2} className="icone" color={menuIconColor} /> {/* Box Chakra como ícone */}
          </Box>
        </Tooltip>
      </Box>
    </>
  );
}