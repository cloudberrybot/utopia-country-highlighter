interface IRegion {
  name: string;
  onClick: (name: string) => void;
  children?: React.ReactNode;
  highlight: boolean;
}

function Region({ name, highlight, onClick }: IRegion) {
  return (
    <button
      type="button"
      className={`${highlight ? 'text-highlighted' : 'text-gray-800'} text-lg`}
      onClick={() => onClick(name)}>{name}
      data-testid={name}
    </button>
  )
}

export default Region;