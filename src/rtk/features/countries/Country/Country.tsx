import React from 'react';

interface ICountryProps {
  name: string;
  children?: React.ReactNode;
  onClick: (name: string) => void;
  highlight: boolean;
}

function Country({ name, highlight, onClick }: ICountryProps) {
  return (
    <button
      type="button"
      className={`${highlight ? 'text-highlighted' : 'text-gray-800'} text-lg`}
      onClick={() => onClick(name)}>{name}
    </button>
  )
}

export default Country;