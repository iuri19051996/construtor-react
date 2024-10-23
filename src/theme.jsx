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
        bg: props.colorMode === 'dark' ? '#333333' : '#e9ecef', // Fundo diferente para claro e escuro
        color: props.colorMode === 'dark' ? '#e9ecef' : '#333333', // Texto diferente para claro e escuro
        fontFamily: "'Helvetica Neue', sans-serif", // Fonte do corpo
        lineHeight: "1.8", // Altura da linha
      },
    }),
  },
 
  // Definindo o sistema de cores
  colors: {
    chakra: {
      bodyBg: '#e9ecef',
      bodyText: '#333333',
    },
    header: {
      light: '#e9ecef',
      dark: '#333333',
    },
    toggle: {
      light: '#333333',
      dark: '#e9ecef',
    },
    menu: {
      light: '#333333',
      dark: '#e9ecef',
    },
  },
});
 
export default theme;