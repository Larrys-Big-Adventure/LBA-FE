import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { render, renderer } from '../__testHelpers__';

import { RegisterForm } from '../components';

afterEach(cleanup);

describe('RegisterForm', () => {
  it('renders without crashing', () => {
    render(<RegisterForm />);
  });

  // it('matches previous snapshot', () => {
  //   const tree = renderer(<RegisterForm />);
  //   expect(tree.toJSON()).toMatchSnapshot();
  // });
});
