import Header from './Header'
import { render } from '@testing-library/react'

test('renders correctly', () => {
  const { asFragment } = render(
    <Header content="Header" />
  );

  expect(asFragment()).toMatchSnapshot();
});
