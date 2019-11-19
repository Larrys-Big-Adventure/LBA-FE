import styled from 'styled-components';
import { Form, Field } from 'formik';

const AuthCardContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 500px;
  margin-top: 50px;
  text-align: center;
  border-radius: 3px;
  flex-direction: column;
  border: 2px solid black;
`;

const AuthInput = styled(Field)`
  padding: 12px;
  border: 1px solid #3d3d3d;
  margin-bottom: 5px;
  width: 100%;
`;

const AuthForm = styled(Form)`
  display: flex;
  padding: 0 3%;
  flex-direction: column;
  align-items: center;
`;

const AuthButton = styled.button`
  padding: 15px;
  margin-top: 10px;
  width: 30%;
  cursor: pointer;
`;

const BottomMessage = styled.p`
  margin: 15px 0;
`;

const ErrorMessage = styled.p`
  font-size: 15px;
  color: red;
`;
export {
  AuthCardContainer,
  AuthInput,
  AuthForm,
  AuthButton,
  BottomMessage,
  ErrorMessage
};
