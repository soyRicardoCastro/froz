import { Link } from 'react-router-dom'
import logo from '../../assets/1.png'

export default function Missing() {
  return (
    <div className='h-screen w-screen bg-slate-800 flex items-center flex-col justify-center gap-3'>
      <img src={logo} alt='Logo FROZ' />

      <div>
        <h1 className='text-3xl text-white font-bold'>404 - Not Found Page</h1>
      </div>

      <div className='text-xl text-gray-400'>Go back or one of the following links</div>

      <div className='text-md text-gray-300'>
        <p>Go to <Link to='/dashboard' className='text-lime-500 font-semibold underline hover:no-underline'>Dashboard</Link> or <Link to='/' className='text-lime-500 font-semibold underline hover:no-underline'>Home Page</Link></p>
      </div>
    </div>
  )
}