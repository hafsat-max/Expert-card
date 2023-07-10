import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { Dispatch, SetStateAction, useState, createContext, useEffect } from 'react';;



export interface UserDetails  {
  img: string;
  first_name: string;
}

export type ContextType = {user: UserDetails | null; setUser: Dispatch<SetStateAction<UserDetails | null>>;}

export const AuthContext = createContext<ContextType | null>(null);



export default function App({ Component, pageProps }: AppProps) {




  


  const [user, setUser] = useState<UserDetails | null>(null);
  
  let storeData = {
    user,
    setUser
  };



  return(
    <AuthContext.Provider value={storeData}>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
    </AuthContext.Provider>
      
  )
}
