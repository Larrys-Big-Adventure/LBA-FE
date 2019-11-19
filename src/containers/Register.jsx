import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { RegisterForm, GameTitle } from '../components';
import { AuthCardContainer, BottomMessage } from '../styles/AuthCard';

const Register = ({ history }) => {
  return (
    <AuthCardContainer>
      <GameTitle />
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
