import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { render, renderer } from '../__testHelpers__';

import App from '../App.jsx';

afterEach(cleanup);

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('matches previous snapshot', () => {
    const tree = renderer(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
