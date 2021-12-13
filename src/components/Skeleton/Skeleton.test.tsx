import '@testing-library/jest-dom'

import Skeleton from './Skeleton';
import { render } from '@testing-library/react';

test('renders correctly', () => {
  const { asFragment } = render(
    <Skeleton flow="col" columns={5} />
  );

  expect(asFragment()).toMatchSnapshot();
});
