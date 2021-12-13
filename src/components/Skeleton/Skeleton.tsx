
interface ISkeletonProps {
  columns: number
  rows?: number
  flow: 'col' | 'row'
}

function Skeleton({ flow, columns, rows }: ISkeletonProps) {
  if (flow === 'col') {
    return <>{Array.from(Array(columns).keys()).map(value => (<div key={value} className="w-full h-8 animate-pulse bg-gray-400"></div>))}</>
  }
  return <div className="w-40 animate-pulse bg-gray-400 py-2 px-2"></div>;
}

export default Skeleton;