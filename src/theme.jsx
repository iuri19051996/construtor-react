import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light', // Modo claro como padrão
  useSystemColorMode: false, // Não usar o modo de cores do sistema
};

// Extendendo o tema
const theme = extendTheme({
  config,
  
  // Definindo estilos globais
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#000000' : '#f4f4f4', // Fundo diferente para claro e escuro
        color: props.colorMode === 'dark' ? '#FFFFFF' : '#333333', // Texto diferente para claro e escuro
        fontFamily: "'Helvetica Neue', sans-serif", // Fonte do corpo
        lineHeight: "1.8", // Altura da linha
      },
    }),
  },

  // Definindo o sistema de cores
  colors: {
    chakra: {
      bodyBg: '#f4f4f4',
      bodyText: '#333333',
    },
    header: {
      light: '#FFFFFF',
      dark: '#000000',
    },
    toggle: {
      light: '#e80ceb',
      dark: '#33fd00',
    },
    brand: {
      100: '#f7cbd3',
      200: '#f9b6c3',
    },
  },
});

export default theme;