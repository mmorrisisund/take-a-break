import { Route, Routes } from 'react-router-dom'

import { Header } from '../Header'
import { Break, Breaks, Home, Settings, SignIn, SignUp } from '../../pages'

export const Layout = () => (
  <div className='flex flex-col min-h-screen bg-blue-500'>
    <Header />
    <main className='flex-grow'>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='break'>
        <Route path='add' element={<Break mode='add' />} />
        <Route path='edit/:id' element={<Break mode='edit' />} />
        <Route path='view/:id' element={<Break mode='view' />} />
      </Route>
      <Route path='/breaks' element={<Breaks />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
    </main>
  </div>
)
