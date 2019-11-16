import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import render from '../__testHelpers__/render';

import App from '../App.jsx';

afterEach(cleanup);

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
