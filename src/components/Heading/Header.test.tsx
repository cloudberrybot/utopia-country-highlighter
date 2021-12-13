import Header from './Header'
import { render } from '@testing-library/react'

test('renders europe react link', () => {
  const { getByText } = render(
    <Header content="Header" />
  );

  expect(getByText(/Header/i)).toBeInTheDocument()
});
