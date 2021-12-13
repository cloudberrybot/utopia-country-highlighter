import React from 'react';
import Region from './Region';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  const { getByText } = render(
    <Region highlight name="Africa" onClick={jest.fn} />
  );

  expect(getByText(/Africa/i)).toBeInTheDocument();
});
