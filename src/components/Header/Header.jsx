import { Link } from 'react-router-dom'

import { Sun } from '../Icons'

export const Header = () => {
  return (
    <header className='w-full h-20 py-2 px-4 flex items-end justify-between'>
      <div className='w-16 h-16'>
        <Link to='/'>
          <Sun />
        </Link>
      </div>
      <div>
        <h1 className='text-5xl'>let's take a break</h1>
      </div>
      <div>
        <ul className='flex items-center space-x-4'>
          <li>
            <Link to='/signin'>Sign In</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
