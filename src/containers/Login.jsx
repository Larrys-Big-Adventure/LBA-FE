import React from 'react';
import styled from 'styled-components';
import { LoginForm } from '../components';

const Login = () => {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  margin: 0 auto;
`;

export default Login;
