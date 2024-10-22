import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
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