import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LoginForm, GameTitle } from '../components';
import {
  AuthTitle,
  BottomMessage,
  AuthCardContainer
} from '../styles/AuthCard';

import { Container, Button, TextInput } from 'nes-react';
const Login = ({ history }) => {
  return (
    <AuthCardContainer>
      <link
        href="https://fonts.googleapis.com/css?family=Press+Start+2P"
        rel="stylesheet"
      />
      <Container rounded>
        <GameTitle />
        <AuthTitle>Login</AuthTitle>
        <LoginForm history={history} />
        <BottomMessage>
          Dont have an account?
          <Link to="/register"> Sign up</Link>
        </BottomMessage>
      </Container>
    </AuthCardContainer>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Login;
