import { createContext, ReactNode} from 'react'

type SignInCreditials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials : SignInCreditials) : Promise<void>;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children } : AuthProviderProps) {
  const isAuthenticated = false;
  
  async function signIn({ email, password  } : SignInCreditials)  {
    console.log(email, password)
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}