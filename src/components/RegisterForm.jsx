import React from 'react';
import * as Yup from 'yup';
import { withFormik } from 'formik';

import axiosWithAuth from '../utils/axiosWithAuth';
import { AuthForm, AuthInput, AuthButton } from '../styles/AuthCard';

const RegisterForm = () => {
  return (
    <AuthForm action="">
      <AuthInput
        component="input"
        type="text"
        name="username"
        placeholder="johnd0e123"
      />
      <AuthInput
        component="input"
        type="password"
        name="password1"
        placeholder="password1"
      />
      <AuthInput
        component="input"
        type="password"
        name="password2"
        placeholder="password2"
      />
      <AuthButton type="submit">Submit</AuthButton>
    </AuthForm>
  );
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
  password1: Yup.string().required(),
  password2: Yup.string().required()
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
