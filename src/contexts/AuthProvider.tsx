import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { parseCookies, destroyCookie, setCookie } from 'nookies';
import { api } from './../services/apiClient';


interface AuthProviderProps {
  children: ReactNode;
}

export type User = {
  id: string;
  number: string;
  name: string
  avatar: string;
}

interface SignInCredentials {
  number: string;
  password: string;
}

interface AuthProviderContextProps {
  user: User | undefined;
  signOut(): Promise<void>
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthProviderContextProps>(
  {} as AuthProviderContextProps
)

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user;
  const router = useRouter()

  useEffect(() => {
    const {token} = parseCookies()

    if(token) {
      api.get("/auth/session")
        .then(r => {
          setUser(r.data)
        })
        .catch(() => {
          destroyCookie(undefined, 'token')
          router.push("/auth/login")
        })
      

    }
  }, [])

  async function signOut() {
    destroyCookie(undefined, 'token')
    router.push("/auth/login")
  }

  async function signIn({number, password}: SignInCredentials) {
    try {
      const {data} = await api.post("auth/login", {
        number, password
      })

      setCookie(undefined, 'token', data.token, {
        maxAge: 60 * 60,  // one hour
        path: '/'
      })

      api.defaults.headers['Authorization'] = `Bearer ${data.token}`

      router.push("/")
      return
    } catch (err: any) {
      console.log(err.response.data)
    }
  }

  return (
    <AuthContext.Provider value={{signIn, signOut, isAuthenticated, user}}>
      {children}
    </AuthContext.Provider>
  )
  
}