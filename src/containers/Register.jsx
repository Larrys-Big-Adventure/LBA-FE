import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { RegisterForm, GameTitle } from '../components';
import {
  AuthTitle,
  BottomMessage,
  AuthCardContainer
} from '../styles/AuthCard';

import { Container } from 'nes-react';

const Register = ({ history }) => {
  return (
    <AuthCardContainer>
      <Container>
        <Container>Larry's Leisurely Adventure Game</Container>

        <Container>Sign up</Container>
        <RegisterForm history={history} />
        <Container>
          <link
            href="https://fonts.googleapis.com/css?family=Press+Start+2P"
            rel="stylesheet"
          />
          Already have an account?
          <Link to="/login"> Log in</Link>
        </Container>
      </Container>
    </AuthCardContainer>
  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Register;
