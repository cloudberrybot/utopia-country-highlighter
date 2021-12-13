import { Region } from '../Region';
import { Skeleton } from '../../../../components/Skeleton';
import { useGetCountriesQuery } from '../../../services/countries/apiSlice';
import { useState } from 'react';

interface IRegionsProps {
  continent: string;
  children?: React.ReactNode;
  onClick: (name: string) => void;
}

function Regions({ continent, onClick }: IRegionsProps) {
  const [selected, select] = useState('');

  const handleClick = (name: string) => {
    select(name);
    onClick(name);
  }

  const { regions, error, isLoading } = useGetCountriesQuery(undefined, {
    selectFromResult: ({ data, error, isLoading }) => ({
      regions: [...Array.from(new Set(data?.map(country => {
        if (country.continent === continent) {
          return country.region
        }
        return null;
      }).filter(Boolean)))], error, isLoading
    })
  });

  if (error) return null;

  return (
    <div className="grid grid-cols-3 justify-items-stretch md:grid-cols-4 lg:grid-cols-6 gap-4">
      {isLoading && <Skeleton flow="col" columns={5}></Skeleton>}
      {!isLoading && regions?.map((region: any) => <Region highlight={selected === region} name={region} key={region} onClick={() => handleClick(region)} />)}
    </div>
  );
}

export default Regions;