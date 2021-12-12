import React from 'react';
import { Region } from '../Region';

interface IRegions {
  data?: string[];
  children?: React.ReactNode;
}

const defaultValues = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

function Regions({ data = defaultValues }: IRegions) {
  return (
    <div className="m-4 max-w-md mx-auto">
      <div className="grid grid-cols-3 grid-flow-row gap-4 items-center justify-items-end">
        {data?.map(name => <Region name={name} key={name} />)}
      </div>
    </div>
  );
}

export default Regions;