import { CONTINENTS } from '../constants';
import { Continent } from '../Continent';
import { useState } from 'react';

interface IContinentsProps {
  continents?: string[];
  children?: React.ReactNode;
  onClick: (name: string) => void;
}

function Continents({ continents = CONTINENTS, onClick }: IContinentsProps) {
  const [selected, select] = useState('');

  const handleClick = (name: string) => {
    select(name);
    onClick(name);
  }

  return (
    <div className="grid grid-cols-3 justify-items-stretch md:grid-cols-4 lg:grid-cols-6 gap-4">
      {continents?.map((name: string) => <Continent highlight={selected === name} name={name} key={name} onClick={handleClick} />)}
    </div>
  );
}

export default Continents;