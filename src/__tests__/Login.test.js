import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import render from '../__testHelpers__/render';

import Login from '../components/Login.jsx';

afterEach(cleanup);

describe('Login', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });
});
