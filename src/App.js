import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import history from 'utils/history';
import { Main } from 'pages';
import { LayoutRoute } from 'routers';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <LayoutRoute component={Main} path="/main" />
          <Redirect to="/main" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
