import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function App() {
  return (
    <>
      <h1>hello</h1>
      <Switch>
        <PrivateRoute path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
}

export default App;
