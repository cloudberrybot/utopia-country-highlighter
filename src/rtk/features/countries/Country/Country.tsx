
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
      className={`${highlight ? 'text-highlighted' : 'text-gray-800'} text-lg hover:text-pink-500`}
      onClick={() => onClick(name)}>{name}
    </button>
  )
}

export default Country;