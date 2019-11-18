import React from 'react';
import * as Yup from 'yup';
import { Field, withFormik, Form } from 'formik';

import axiosWithAuth from '../utils/axiosWithAuth';

const LoginForm = () => {
  return (
    <Form action="">
      <Field
        component="input"
        type="text"
        name="username"
        placeholder="johnd0e123"
      />
      <Field
        component="input"
        type="text"
        name="password"
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

const LoginFormWithFormik = withFormik({
  mapPropsToValues: ({ username, password }) => {
    return {
      username: username || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit: (values, { props }) => {
    axiosWithAuth()
      .post('', values)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/');
      })
      .catch(err => {
        console.error(err); // eslint-disable-line
      });
  }
})(LoginForm);

export default LoginFormWithFormik;
