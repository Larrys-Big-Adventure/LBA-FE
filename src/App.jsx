import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, NoMatch } from './containers';
import { PrivateRoute } from './components';
import GlobalStyle from './styles';
import authContext from './contexts/authContext';

function App() {
  // const [auth, setAuth] = useState({});
  return (
    <authContext.Provider value={{}}>
      <GlobalStyle />
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </authContext.Provider>
  );
}

export default App;
