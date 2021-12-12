import Logo from './Logo';
import React from 'react';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  const { getByText } = render(
    <Logo />
  );

  expect(getByText(/Utopia Country Highlighter/i)).toBeInTheDocument();
});
