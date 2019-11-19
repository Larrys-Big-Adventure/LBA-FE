import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { render, renderer } from '../__testHelpers__';

import { LoginForm } from '../components';

afterEach(cleanup);

describe('LoginForm', () => {
  it('renders without crashing', () => {
    render(<LoginForm />);
  });

  // it('matches previous snapshot', () => {
  //   const tree = renderer(<LoginForm />);
  //   expect(tree.toJSON()).toMatchSnapshot();
  // });
});
