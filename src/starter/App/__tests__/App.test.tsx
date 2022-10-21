import React from 'react';

import { screen } from '@testing-library/react';
// eslint-disable-next-line import/no-unresolved
import { createMemoryHistory } from 'history';

import App from 'starter/App/App';

describe('React router', () => {
  it('renders home page', () => {
    const history = createMemoryHistory();
    const linkElement = screen.getByText(/App/i);

    expect(linkElement).toMatchSnapshot();
  });
});
