import { Header } from '../Header';
import { Navbar } from '../Navbar';
import React from 'react';
import { Regions } from '../Regions';
import { useGetCountriesQuery } from '../../services/countries/apiSlice';

function App() {
  const { data, error, isLoading } = useGetCountriesQuery();
  console.log({ data, error, isLoading });

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Header />
        <Regions />
      </div>
    </div>
  );
}

export default App;
