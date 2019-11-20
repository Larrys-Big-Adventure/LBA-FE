import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { RegisterForm, GameTitle } from '../components';
import {
  AuthTitle,
  BottomMessage,
  AuthCardContainer
} from '../styles/AuthCard';

const Register = ({ history }) => {
  return (
    <AuthCardContainer>
      <GameTitle />
      <AuthTitle>Sign up</AuthTitle>
      <RegisterForm history={history} />
      <BottomMessage>
        Already have an account?
        <Link to="/login"> Log in</Link>
      </BottomMessage>
    </AuthCardContainer>
  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Register;
