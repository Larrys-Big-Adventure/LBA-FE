import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { render, renderer } from '../__testHelpers__';

import { PrivateRoute } from '../components';
import { Home } from '../containers';

afterEach(cleanup);

describe('PrivateRoute', () => {
  it('renders without crashing', () => {
    const Component = () => <h1>Testing</h1>;
    render(<PrivateRoute path="/" component={Home} />);
  });

  // it('matches previous snapshot', () => {
  //   const tree = renderer(<PrivateRoute />);
  //   expect(tree.toJSON()).toMatchSnapshot();
  // });
});
