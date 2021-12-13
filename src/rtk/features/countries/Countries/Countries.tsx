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

  console.log(selected);

  return (
    <div className="grid grid-cols-3 justify-items-stretch justify-start gap-4 m-4 md:whitespace-nowrap">
      {isLoading && <Skeleton flow="col" columns={5}></Skeleton>}
      {!isLoading && countriesByRegion?.map((country: any) => {
        return <Country name={country.name} highlight={false} key={country.name} onClick={(e) => handleClick(country)} />
      })}
    </div>
  );
}

export default Countries;