import { createContext, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
import api from '../services/api'

interface AuthProviderProps {
  children: React.ReactNode
}

interface SignInProps {
  email: string
  password: string
}

interface SignUpProps {
  email: string
  password: string
  phone: string
  name: string
}

type User = {
  role: string
}

interface AuthContextType {
  isLoggedIn: boolean
  token?: string
  user?: User
  signIn: (props: SignInProps) => Promise<void>
  signUp: (props: SignUpProps) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useLocalStorage('token', null)
  const [user, setUser] = useLocalStorage('user', null)
  const navigate = useNavigate()

  const getUser = async (accessToken: string) => {
    const response = await api.get('/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    setUser(response.data)
  }

  const signIn = async ({ email, password }: SignInProps) => {
    const response = await api.post('/signin', {
      email,
      password,
    })
    setToken(response.data.session.access_token)
    getUser(response.data.session.access_token)
    navigate('/')
  }

  const signUp = async ({ email, password, phone, name }: SignUpProps) => {
    const response = await api.post('/signup', {
      email,
      password,
      phone,
      name,
    })
    setToken(response.data.session.access_token)
    getUser(response.data.session.access_token)
    navigate('/')
  }

  const signOut = () => {
    setToken(null)
    setUser(null)
    navigate('/sign-in')
  }

  useEffect(() => {
    if (token) {
      api
        .post('/auth/verify', null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((error) => {
          console.error(error)
          setToken(null)
          setUser(null)
        })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token,
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
