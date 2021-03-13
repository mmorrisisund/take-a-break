import { createContext, useContext, useEffect, useState } from 'react'
import localForage from 'localforage'

const AuthContext = createContext()

const createStore = () => {
  return localForage.createInstance({
    name: 'lets-take-a-break',
    storeName: 'users',
  })
}

const initialUser = () => {
  const user = localStorage.getItem('user')
  return !!user ? JSON.parse(user) : null
}

export const AuthProvider = ({ children }) => {
  const [userStore, setUserStore] = useState(createStore)
  const [user, setUser] = useState()
  const defaultSettings = {
    periodLength: 2,
    hoursPerPeriod: 4,
  }

  useEffect(() => {
    !!user
      ? localStorage.setItem('user', JSON.stringify(user))
      : localStorage.removeItem('item')
  }, [user])

  const signUp = async (email) => {
    try {
      const user = await userStore.getItem(email)
      if (user) {
        throw new Error('A user with this email already exists')
      }
      const newUser = await userStore.setItem(email, {
        ...defaultSettings,
        email,
      })

      setUser(newUser)
      return newUser
    } catch (error) {
      throw new Error('Unknown error creating user')
    }
  }
  const signIn = async (email) => {
    try {
      const user = await userStore.getItem(email)

      if (!user) {
        throw new Error('A user with this email was not found.')
      }

      setUser(user)
      return user
    } catch (error) {
      throw new Error('An unknown error occured.')
    }
  }
  const signOut = () => setUser(null)
  const isSignedIn = () => Boolean(localStorage.getItem('user'))

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        isSignedIn,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be wrapped in an AuthProvider')
  }
  return ctx
}
