import React from 'react';

import { render, screen } from '@testing-library/react';

import { EditProduct } from 'mainModule/pages/EditProduct/index';

test('render', () => {
  render(<EditProduct />);
  expect(screen.getByText('Изменить')).toBeInDocument();
});
