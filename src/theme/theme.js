// src/theme/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? '#f8f2ed' : '#202023',
        color: props.colorMode === 'light' ? 'black' : 'white',
      },
    }),
  },
});

export default theme;