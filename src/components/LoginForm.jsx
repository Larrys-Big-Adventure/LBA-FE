/* eslint-disable react/forbid-prop-types */
import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import axios from 'axios';
import {
  AuthForm,
  AuthInput,
  AuthButton,
  ErrorMessage
} from '../styles/AuthCard';
import { TextInput, Button, Container } from 'nes-react';

const LoginForm = ({ errors, touched }) => {
  return (
    <AuthForm action="">
      <AuthInput
        component="input"
        type="text"
        name="username"
        placeholder="Username"
      />
      {touched.username && errors.username && (
        <ErrorMessage>{errors.username}</ErrorMessage>
      )}
      <AuthInput
        component="input"
        type="password"
        name="password"
        placeholder="Password"
      />
      {touched.password && errors.password && (
        <ErrorMessage>{errors.password}</ErrorMessage>
      )}
      <AuthButton primary type="submit">
        Submit
      </AuthButton>
    </AuthForm>
  );
};

LoginForm.propTypes = {
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapPropsToValues = ({ username, password }) => {
  return {
    username: username || '',
    password: password || ''
  };
};
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .label('Username')
    .required(),
  password: Yup.string()
    .label('Password')
    .required()
});
const handleSubmit = (values, { props, resetForm }) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}api/login/`, values)
    .then(res => {
      localStorage.setItem('token', res.data.key);
      props.history.push('/');
    })
    .catch(err => {
      console.error(err); // eslint-disable-line
      resetForm();
    });
};

const LoginFormWithFormik = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit
})(LoginForm);

export default LoginFormWithFormik;
