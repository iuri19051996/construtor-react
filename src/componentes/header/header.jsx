import { useColorMode, useColorModeValue, Box, Flex, Heading } from '@chakra-ui/react';
import Logo from '../../assets/logo.svg?react';
import { Toggle } from '../switch/switch';
import './header.css'

export function Header() {
  const { colorMode } = useColorMode();
  const headerBgColor = useColorModeValue('header.light', 'header.dark');
  const toggleBgColor = useColorModeValue('toggle.light', 'toggle.dark');
  //const svgColor = useColorModeValue('blue.500', 'green.500');

  return (
    <Box 
      as="header" 
      className="barra-topo"
      bg={headerBgColor}
      width="100vw"
      height="80px"
    >
      <Flex 
        align="center" 
        justify="space-between" 
        height="100%"
        width="100%" 
        paddingX="10px"
      >
        <Box className="titulo-barraTopo">
          <Heading as="h1" size="lg" color={toggleBgColor} marginBottom="0">
            Construtor de
          </Heading>
          <Heading as="h2" size="md" color={colorMode === 'light' ? 'green' : 'blue'} marginTop="0">
            Recursos Interativos@@
          </Heading>
        </Box>

        <Logo width="550" height="500px" color={toggleBgColor} />

        <Toggle />
      </Flex>
    </Box>
  );
}