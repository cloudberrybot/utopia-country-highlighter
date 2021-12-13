import '@testing-library/jest-dom'

import Navbar from './Navbar';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  const { asFragment } = render(
    <Navbar />
  );

  expect(asFragment()).toMatchSnapshot();
});
