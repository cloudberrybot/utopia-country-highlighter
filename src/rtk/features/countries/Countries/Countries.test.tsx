import Countries from './Countries';
import { render } from '@testing-library/react';

test('renders europe react link', () => {
  const { getByText } = render(
    <Countries continent="Europe" region="Nothern Europe" onClick={jest.fn}/>
  );

  expect(getByText(/Utopia Country Highlighter/i)).toBeInTheDocument();
});
