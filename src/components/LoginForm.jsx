import React from 'react';
import * as Yup from 'yup';
import { withFormik } from 'formik';

import axiosWithAuth from '../utils/axiosWithAuth';
import { AuthForm, AuthInput, AuthButton } from '../styles/AuthCard';

const LoginForm = () => {
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
        type="text"
        name="password"
        placeholder="password"
      />
      <AuthButton type="submit">Submit</AuthButton>
    </AuthForm>
  );
};
const mapPropsToValues = ({ username, password }) => {
  return {
    username: username || '',
    password: password || ''
  };
};
const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required()
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
