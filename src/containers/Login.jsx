import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LoginForm } from '../components';

const Login = ({ history }) => {
  return (
    <LoginContainer>
      <LoginForm history={history} />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  margin: 0 auto;
`;

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Login;
