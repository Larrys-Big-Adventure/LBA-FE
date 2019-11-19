import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, NoMatch, Register } from './containers';

import { PrivateRoute } from './components';
import GlobalStyle from './styles';

function App() {
  // const [auth, setAuth] = useState({});
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
