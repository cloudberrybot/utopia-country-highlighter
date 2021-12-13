import Country from './Country';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  const { getByText } = render(
    <Country name='Helsinki' />
  );

  expect(getByText(/Helsinki/i)).toBeInTheDocument();
});
