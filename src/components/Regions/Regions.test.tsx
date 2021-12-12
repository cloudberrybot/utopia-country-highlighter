import React from 'react';
import Regions from './Regions';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  const { getByText } = render(
    <Regions />
  );

  expect(getByText(/Africa/i)).toBeInTheDocument();
});
