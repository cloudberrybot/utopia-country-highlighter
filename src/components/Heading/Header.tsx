interface IHeaderProps {
  content: string
}

function Header({ content }: IHeaderProps) {
  return (
    <div className="mt-8 ml-2 mb-2">
      <h1 className="text-lg text-gray-700 font-semibold">{content}</h1>
      <hr className="border-b border-gray-200 border-[1px] mt-1" />
    </div>
  )
}

export default Header;