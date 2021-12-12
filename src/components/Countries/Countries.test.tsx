import Countries from './Countries';
import React from 'react';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  const { getByText } = render(
    <Countries />
  );

  expect(getByText(/Utopia Country Highlighter/i)).toBeInTheDocument();
});
