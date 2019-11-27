/* eslint-disable react/forbid-prop-types */
import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';

import {
  AuthForm,
  AuthInput,
  AuthButton,
  ErrorMessage
} from '../styles/AuthCard';

import { TextInput, Button, Container } from 'nes-react';

const RegisterForm = ({ errors, touched }) => {
  return (
    <Container action="">
      <TextInput
        component="input"
        type="text"
        name="username"
        placeholder="Username"
      />
      {touched.username && errors.username && (
        <ErrorMessage>{errors.username}</ErrorMessage>
      )}
      <TextInput
        component="input"
        type="password"
        name="password1"
        placeholder="Password"
      />
      {touched.password1 && errors.password1 && (
        <ErrorMessage>{errors.password1}</ErrorMessage>
      )}
      <TextInput
        component="input"
        type="password"
        name="password2"
        placeholder="Confirm password"
      />
      {touched.password2 && errors.password2 && (
        <ErrorMessage>{errors.password2}</ErrorMessage>
      )}
      <Button primary type="submit">
        Submit
      </Button>
    </Container>
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
    // .matches(
    //   /^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    // )
    .required(),
  password2: Yup.string()
    .oneOf([Yup.ref('password1'), null], "Password don't match")
    .required('Confirm password is required')
});

const handleSubmit = (values, { props, resetForm }) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}api/registration/`, values)
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
