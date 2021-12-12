import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type CountriesResponse = any[]

export const apiSlice = createApi({
  reducerPath: 'countries',
  baseQuery: fetchBaseQuery({ 
    baseUrl: process.env.REACT_APP_COUNTRIES_API
  }),
  endpoints: builder => ({
    getCountries: builder.query<CountriesResponse, void>({
      query: () => '/countries.json'
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetCountriesQuery } = apiSlice