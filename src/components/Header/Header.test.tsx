import Header from './Header';
import React from 'react';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  const { getByText } = render(
    <Header />
  );

  expect(getByText(/Utopia Country Highlighter/i)).toBeInTheDocument();
});
