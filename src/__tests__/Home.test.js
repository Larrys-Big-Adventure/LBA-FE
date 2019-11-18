import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { render, renderer } from '../__testHelpers__';

import { Home } from '../containers';

afterEach(cleanup);

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  // it('matches previous snapshot', () => {
  //   const tree = renderer(<Home />);
  //   expect(tree.toJSON()).toMatchSnapshot();
  // });
});
