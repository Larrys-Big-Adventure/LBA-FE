import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

  const render = props => (token ? <Component {...props} /> : null);
  return (
    <Route exact path={path} render={render} {...rest} loading={loading} />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  component: PropTypes.element.isRequired
};

export default withRouter(PrivateRoute);
