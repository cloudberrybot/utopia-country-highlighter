import App from './App';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../../rtk/app/store';

test('renders correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
