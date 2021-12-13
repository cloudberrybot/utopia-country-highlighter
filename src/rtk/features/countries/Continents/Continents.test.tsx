import Continents from './Continents';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  const { getByText } = render(
    <Continents onSelect={jest.fn}/>
  );

  expect(getByText(/Africa/i)).toBeInTheDocument();
});
