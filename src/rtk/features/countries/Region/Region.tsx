interface IRegion {
  name: string;
  onClick: (name: string) => void;
  children?: React.ReactNode;
  highlight: boolean;
}

function Region({ name, highlight, onClick }: IRegion) {
  return <button type="button" className={`${highlight ? 'text-highlighted' : 'text-gray-800'} text-lg hover:text-pink-500 `} onClick={() => onClick(name)}>{name}</button>
}

export default Region;