import React, { useEffect, useState } from 'react';
import { Route, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, path, history, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const { token } = localStorage;
  useEffect(() => {
    setLoading(true);
    const fn = () => {
      if (!token) {
        setLoading(false);
        history.push('/login');
      }
    };
    fn();
    setLoading(false);
  }, [path, history, token]);

  // we're trying to mimic a Route component here.
  const render = props => (token ? <Component {...props} /> : null);
  return (
    <Route exact path={path} render={render} {...rest} loading={loading} />
  );
};

export default withRouter(PrivateRoute);
