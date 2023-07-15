import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  useEffect,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface UserDetails {
  profile_picture: string;
  first_name: string;
}

export type ContextType = {
  user: UserDetails | null;
  setUser: Dispatch<SetStateAction<UserDetails | null>>;
  selectedCard: number[];
  setSelectedCard: Dispatch<SetStateAction<number[]>>;
  savedEmail: string;
  setSavedEmail: (val: string) => void;
};

export const AuthContext = createContext<ContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [selectedCard, setSelectedCard] = useState<number[]>([]);
  const [savedEmail, setSavedEmail] = useState("");

  let storeData = {
    user,
    setUser,
    selectedCard,
    setSelectedCard,
    savedEmail,
    setSavedEmail,
  };

  return (
    <AuthContext.Provider value={storeData}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ToastContainer />
        <Component {...pageProps} />
      </MantineProvider>
    </AuthContext.Provider>
  );
}
