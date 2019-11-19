import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { render, renderer } from '../__testHelpers__';

import { GameTitle } from '../components';

afterEach(cleanup);

describe('GameTitle', () => {
  it('renders without crashing', () => {
    render(<GameTitle />);
  });

  // it('matches previous snapshot', () => {
  //   const tree = renderer(<GameTitle />);
  //   expect(tree.toJSON()).toMatchSnapshot();
  // });
});
