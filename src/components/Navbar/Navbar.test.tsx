import Navbar from './Navbar';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

test('renders europe react link', () => {
  const { getByText } = render(
    <Navbar />
  );

  expect(getByText(/Utopia Country Highlighter/i)).toBeInTheDocument();
});
