import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { render, renderer } from '../__testHelpers__';

import { Login } from '../containers';

afterEach(cleanup);

describe('Login', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('matches previous snapshot', () => {
    const tree = renderer(<Login />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
