import '@testing-library/jest-dom'

import Skeleton from './Skeleton';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  render(
    <Skeleton flow="col" columns={5} />
  );

});
