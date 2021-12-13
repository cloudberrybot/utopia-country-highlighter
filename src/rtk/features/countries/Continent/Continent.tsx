
interface IContinentProps {
  name: string
  onClick: (name: string) => void;
  highlight: boolean;
}

function Continent({ name, highlight, onClick }: IContinentProps) {
  return <button type="button" className={`${highlight ? 'text-highlighted' : 'text-gray-800'} text-lg md:text-xl hover:text-pink-500`} onClick={() => onClick(name)}>{name}</button>
}

export default Continent;