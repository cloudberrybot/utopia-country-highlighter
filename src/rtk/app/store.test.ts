import { store } from './store';
import { toggle } from '../features/countries/countriesSlice';

describe('store', () => {
  const helsinki = {
    name: 'Helsinki'
  }

  const stockholm = {
    name: 'Stockholm'
  }
  test('should highlight a country', () => {
    const stockholm = {
      name: 'Stockholm'
    }

    store.dispatch(toggle(helsinki))
    store.dispatch(toggle(stockholm))

    expect(store.getState().countries).toEqual({ selected: [helsinki, stockholm] })
  })

  test('should unhighlight a country', () => {
    expect(store.getState().countries).toEqual({ selected: [helsinki, stockholm] })
    store.dispatch(toggle(helsinki))
    expect(store.getState().countries).toEqual({ selected: [stockholm] })

  })
})