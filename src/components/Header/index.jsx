export default function Header({ category, title }) {
  return (
  <div className='mb-10 ml-10'>
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-bold tracking-tight text-gray-200">
      {title}
    </p>
  </div>
  )
};