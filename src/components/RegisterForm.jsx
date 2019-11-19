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

const RegisterForm = ({ errors, touched }) => {
  return (
    <AuthForm action="">
      <AuthInput
        component="input"
        type="text"
        name="username"
        placeholder="Email"
      />
      {touched.username && errors.username && (
        <ErrorMessage>{errors.username}</ErrorMessage>
      )}
      <AuthInput
        component="input"
        type="password"
        name="password1"
        placeholder="Password"
      />
      {touched.password1 && errors.password1 && (
        <ErrorMessage>{errors.password1}</ErrorMessage>
      )}
      <AuthInput
        component="input"
        type="password"
        name="password2"
        placeholder="Confirm password"
      />
      {touched.password2 && errors.password2 && (
        <ErrorMessage>{errors.password2}</ErrorMessage>
      )}
      <AuthButton type="submit">Submit</AuthButton>
    </AuthForm>
  );
};

RegisterForm.propTypes = {
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapPropsToValues = ({ username, password1, password2 }) => {
  return {
    username: username || '',
    password1: password1 || '',
    password2: password2 || ''
  };
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password1: Yup.string()
    .label('Password')
    .required(),
  password2: Yup.string()
    .oneOf([Yup.ref('password1'), null], "Password don't match")
    .required('Confirm password is required')
});

const handleSubmit = (values, { props, resetForm }) => {
  axiosWithAuth()
    .post('api/registration/', values)
    .then(res => {
      localStorage.setItem('token', res.data.key);
      props.history.push('/');
    })
    .catch(err => {
      console.error(err); // eslint-disable-line
      resetForm();
    });
};
const RegisterFormWithFormik = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit
})(RegisterForm);

export default RegisterFormWithFormik;
