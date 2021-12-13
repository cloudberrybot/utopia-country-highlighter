import { App } from '../../../../components/App';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { store } from '../../../app/store';

describe('Regions component', () => {
  test('renders correctly', async () => {
    const { asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
})

