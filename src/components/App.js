import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from 'components';
import theme from './themes/default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
