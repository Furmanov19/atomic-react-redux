import React from 'react';
import { ThemeProvider } from 'styled-components';
import Atom from 'components/atoms/Atom';
import theme from './themes/default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Atom>Hello world</Atom>
    </ThemeProvider>
  );
}

export default App;
