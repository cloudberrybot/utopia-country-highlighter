import reducer, { selectedCountries, toggle } from './countriesSlice';

describe('countriesSlice', () => {
  test('should return initial state', () => {
    const helsinki = {
      name: 'Helsinki'
    }
    expect(reducer(undefined, toggle(helsinki))).toEqual({ selected: [helsinki] })
  })
})
