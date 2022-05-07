import { extendTheme } from 'native-base';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  fontConfig: {
    Hind: {
      300: {
        normal: 'Hind_300Light',
      },
      400: {
        normal: 'Hind_400Regular',
      },
      500: {
        normal: 'Hind_500Medium',
      },
      600: {
        normal: 'Hind_600SemiBold',
      },
      700: {
        normal: 'Hind_700Bold',
      },
    },
  },
  fonts: {
    heading: 'Hind',
    body: 'Hind',
    mono: 'Hind',
  },
  colors: {
    background: { box: '#E3E3E3' },
    green: { button: '#8DDCBF' },
    red: { button: '#DC8D8D' },
  },
});

export default theme;
