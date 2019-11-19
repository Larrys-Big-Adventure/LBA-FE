import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { render, renderer } from '../__testHelpers__';

import { Register } from '../containers';

afterEach(cleanup);

describe('Register', () => {
  it('renders without crashing', () => {
    render(<Register history={{ push: () => {} }} />);
  });

  // it('matches previous snapshot', () => {
  //   const tree = renderer(<Register />);
  //   expect(tree.toJSON()).toMatchSnapshot();
  // });
});
