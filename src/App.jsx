import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, NoMatch, Register } from './containers';

import { PrivateRoute } from './components';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
