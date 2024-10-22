import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'; // Importar ChakraProvider
import { RouterProvider } from 'react-router-dom';
import router from './rotas.jsx';
import theme from './theme.jsx'; // Importa o tema personalizado (veremos mais abaixo)
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);