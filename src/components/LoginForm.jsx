import React from 'react';
import { Field, withFormik, Form } from 'formik';
import * as Yup from 'yup';

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
  handleSubmit: () => {}
})(LoginForm);

export default LoginFormWithFormik;
