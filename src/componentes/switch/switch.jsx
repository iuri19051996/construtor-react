import { useColorMode, Switch, Box } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
          <Switch 
            isChecked={colorMode === 'dark'} 
            onChange={toggleColorMode} // Corrigido para usar toggleColorMode
            size="lg" 
            colorScheme="gray"
            position="relative"
          >
            {/* Lua (para modo claro) */}
            <Box 
              position="absolute" 
              left="6px" 
              top="50%" 
              transform="translateY(-50%)"
              display={colorMode === 'light' ? 'flex' : 'none'}
              alignItems="center"
              justifyContent="center"
              pointerEvents="none" 
            >
              <MoonIcon color="gray.800" boxSize={4} />
            </Box>

            {/* Sol (para modo escuro) */}
            <Box 
              position="absolute" 
              right="14px" 
              top="50%" 
              transform="translateY(-50%)"
              display={colorMode === 'dark' ? 'flex' : 'none'}
              alignItems="center"
              justifyContent="center"
              pointerEvents="none"
            >
              <SunIcon color="yellow.400" display={colorMode === 'dark' ? 'flex' : 'none'} boxSize={4} />
            </Box>
          </Switch>
        </Box>
  );
}

