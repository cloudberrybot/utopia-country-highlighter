import React from 'react';
import Region from './Region';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  const { getByText } = render(
    <Region name="Africa" />
  );

  expect(getByText(/Africa/i)).toBeInTheDocument();
});
