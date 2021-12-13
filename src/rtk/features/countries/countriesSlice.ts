import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CountriesState {
  selected: any;
}

// Define the initial state using that type
const initialState: CountriesState = {
  selected: [],
}

export const countriesSlice = createSlice({
  name: 'countries',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<any>) => {
      const index = state.selected.findIndex((country: any) => country.name === action.payload.name)
      if (index !== -1) {
        state.selected.splice(index, 1);
      } else {
        state.selected.push(action.payload);
      }
    },
    select: (state, action: PayloadAction<string>) => {
      state.selected.push(action.payload);
    },
    deselect: (state, action: PayloadAction<string>) => {
      const index = state.selected.findIndex((country: any) => country === action.payload)
      state.selected.splice(index);
    },
  },
})

export const { select, deselect, toggle } = countriesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const allCountries = (state: RootState) => state.api;
export const selectedCountries = (state: RootState) => state.countries.selected;

export default countriesSlice.reducer