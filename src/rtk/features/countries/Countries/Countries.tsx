import { selectedCountries, toggle } from '../countriesSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import { Country } from '../Country';
import { Skeleton } from '../../../../components/Skeleton';
import { useGetCountriesQuery } from '../../../services/countries/apiSlice'

interface ICountriesProps {
  continent: string
  region: string
}

function Countries({ continent, region }: ICountriesProps) {
  const dispatch = useAppDispatch()
  const selected = useAppSelector(selectedCountries);

  const handleClick = (country: any) => {
    dispatch(toggle(country));
  }

  const { countriesByRegion, error, isLoading } = useGetCountriesQuery(undefined, {
    selectFromResult: ({ data, error, isLoading }: any) => ({
      countriesByRegion: data?.filter((country: any) =>
        country.continent === continent && country.region === region
      ), error, isLoading
    })
  });

  if (error) return null;

  return (
    <div className="grid grid-cols-3 items-start justify-items-stretch justify-start gap-4 m-4">
      {isLoading && <Skeleton flow="col" columns={5}></Skeleton>}
      {!isLoading && countriesByRegion?.map((country: any) => {
        let highlight = false;
        const index = selected.findIndex((selectedCountry: any) => selectedCountry.name === country.name)
        if (index !== -1) {
          highlight = true;
        } else {
          highlight = false
        }
        return <Country name={country.name} highlight={highlight} key={country.name} onClick={(e) => handleClick(country)} />
      })}
    </div>
  );
}

export default Countries;