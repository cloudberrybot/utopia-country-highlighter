import React from 'react';

interface IRegion {
  name: string;
  children?: React.ReactNode; 
}

function Region({ name }: IRegion) {
  return <button className="max-w-fit px-4 py-2 font-normal text-md md:text-2xl bg-white text-gray-700 rounded-md shadow-sm outline outline-1 outline-offset-0 outline-gray-500 hover:bg-pink-500 hover:outline-none hover:text-white">{name}</button>

}

export default Region;