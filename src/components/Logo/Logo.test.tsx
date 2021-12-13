import Logo from './Logo';
import { render } from '@testing-library/react';

test('renders correctly', () => {
  const { asFragment } = render(
    <Logo />
  );

  expect(asFragment()).toMatchSnapshot();
});
