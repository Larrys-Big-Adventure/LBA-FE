import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, NoMatch } from './containers';
import { PrivateRoute } from './components';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
