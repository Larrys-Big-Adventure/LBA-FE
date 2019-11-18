import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { render, renderer } from '../__testHelpers__';

import { PrivateRoute } from '../components';

afterEach(cleanup);

describe('PrivateRoute', () => {
  it('renders without crashing', () => {
    render(<PrivateRoute />);
  });

  // it('matches previous snapshot', () => {
  //   const tree = renderer(<PrivateRoute />);
  //   expect(tree.toJSON()).toMatchSnapshot();
  // });
});
