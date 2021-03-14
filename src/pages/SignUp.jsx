import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../providers/auth'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const { signUp } = useAuth()

  const handleSubmit = async  (e) => {
    e.preventDefault()
    try {
      const user = await signUp(email)
      if (user) {
        navigate('/')
      } else {
        setError(new Error('Unknown error occurred.'))
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='container mx-auto flex justify-center'>
      <div className='flex flex-col items-center mt-8 bg-blue-50 rounded-lg shadow-md py-4 px-8'>
        <h2 className='text-3xl text-gray-800'>Sign Up</h2>
        <form
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col items-start'
        >
          <label className='text-sm text-gray-700'>Email</label>
          <input
            type='email'
            className='w-full mt-2 border rounded-lg'
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <span className='text-xs text-red-500 mt-2'>{error}</span>
          <div className='flex justify-between w-full self-end mt-8'>
            <button
              type='button'
              onClick={() => navigate('/')}
              className='border-blue-600 border-2 rounded-lg py-2 px-4 text-blue-900'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-blue-800 text-blue-50 py-2 px-4 rounded-lg'
            >
              Submit
            </button>
          </div>
        </form>
        <span className='mt-4 text-sm'>
          Already a user?{' '}
          <Link to='/signin' className='text-blue-400'>
            Sign In
          </Link>{' '}
          instead.
        </span>
      </div>
    </div>
  )
}
