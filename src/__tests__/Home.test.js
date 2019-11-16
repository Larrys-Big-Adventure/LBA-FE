import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import render from '../__testHelpers__/render';

import Home from '../containers/Home';

afterEach(cleanup);

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });
});
