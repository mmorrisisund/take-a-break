import { Link } from 'react-router-dom'

import { useAuth } from '../../providers/auth'
import { Sun } from '../Icons'

export const Header = () => {
  const { isSignedIn, signOut } = useAuth()
  
  return (
    <header className='w-full h-20 py-2 px-4 flex items-end justify-between'>
      <div className='w-16 h-16'>
        <Link to='/'>
          <Sun />
        </Link>
      </div>
      <div>
        <h1 className='text-blue-100 text-5xl'>let's take a break</h1>
      </div>
      <div>
        <ul className='flex items-center space-x-4'>
          {isSignedIn() ? (
            <>
              <li>
                <Link to='/settings' className='text-blue-50'>
                  Settings
                </Link>
              </li>
              <li>
                <button
                  type='button'
                  onClick={signOut}
                  className='text-blue-50'
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/signin' className='text-blue-50'>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to='/signup' className='text-blue-50'>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  )
}
