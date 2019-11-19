/* eslint-disable react/forbid-prop-types */
import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';

import axiosWithAuth from '../utils/axiosWithAuth';
import {
  AuthForm,
  AuthInput,
  AuthButton,
  ErrorMessage
} from '../styles/AuthCard';

const LoginForm = ({ errors, touched }) => {
  return (
    <AuthForm action="">
      <AuthInput
        component="input"
        type="text"
        name="username"
        placeholder="johnd0e123"
      />
      {touched.username && errors.username && (
        <ErrorMessage>{errors.username}</ErrorMessage>
      )}
      <AuthInput
        component="input"
        type="text"
        name="password"
        placeholder="password"
      />
      {touched.password && errors.password && (
        <ErrorMessage>{errors.password}</ErrorMessage>
      )}
      <AuthButton type="submit">Submit</AuthButton>
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
  axiosWithAuth()
    .post('api/login/', values)
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
