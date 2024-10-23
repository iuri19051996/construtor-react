import { Link } from 'react-router-dom';
import { Box, useColorModeValue } from '@chakra-ui/react';
import "./menuLateralHome.css"
import { FaHome } from "react-icons/fa";
import { RiMenuSearchLine } from "react-icons/ri";
import { PiUserListBold } from "react-icons/pi";
import { TbLogout2 } from "react-icons/tb";
import { Tooltip } from "@chakra-ui/react"
 
const Demo = () => {
  return (
    <Tooltip label="This is the tooltip content" openDelay={0} closeDelay={0}>
    </Tooltip>
  )
}

export function MenulateralHome() {
  const headerBgColor = useColorModeValue('header.light', 'header.dark');
  
  return (
      <>
        <Box className="menu-lateralHome" bg={headerBgColor}>
          <Link to="/">
              <Tooltip label={<span className='teste-span'>Home</span>} openDelay={0} closeDelay={0}>
              <button className="btn-home">
                <FaHome className='icone' />
              </button>
            </Tooltip>
          </Link>
          <Link to="/todosrecursos">
            <Tooltip label={<span className='teste-span'>Todos <br /> os Recursos</span>} openDelay={0} closeDelay={0}>
              <button className="btn-todosRecursos">
                <RiMenuSearchLine className='icone' />
              </button>
            </Tooltip>
          </Link>
          <Link to="/meusrecursos">
          <Tooltip label={<span className='teste-span'>Meus <br /> recursos</span>} openDelay={0} closeDelay={0}>
              <button className="btn-meusRecursos">
                <PiUserListBold className='icone' />
              </button>
            </Tooltip>
          </Link>

          <Tooltip label={<span className='teste-span'>Logout</span>} openDelay={0} closeDelay={0}>
            <button className="btn-voltarLogin">
              <TbLogout2 className='icone' />
            </button>
          </Tooltip>
        </Box>
      </>
    )
}