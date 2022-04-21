import { extendTheme } from 'native-base';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
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
});

export default theme;
