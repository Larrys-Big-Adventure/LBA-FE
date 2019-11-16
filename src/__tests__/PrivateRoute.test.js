import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import render from '../__testHelpers__/render';

import PrivateRoute from '../components/PrivateRoute.jsx';

afterEach(cleanup);

describe('PrivateRoute', () => {
  it('renders without crashing', () => {
    render(<PrivateRoute />);
  });
});
