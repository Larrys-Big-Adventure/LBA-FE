import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, NoMatch } from './containers/';
import { PrivateRoute } from './components/';

function App() {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
