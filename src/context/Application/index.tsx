"use client";
import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IApp {
    pageLoading: {
        [key: string]: boolean;
        home: boolean;
        about: boolean;
        work: boolean;
        contact: boolean;
      };
      setPageLoading: React.Dispatch<SetStateAction<{
        home: boolean;
        about: boolean;
        work: boolean;
        contact: boolean;
      }>>;
}

const initialState = {
    pageLoading: {
        home: true,
        about: true,
        work: true,
        contact: true,
      },
      setPageLoading: () => {},
};

const AppContext = createContext<IApp>(initialState);

export const useApp = () => useContext(AppContext);

// Create a provider component that initializes the ref
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
    const [pageLoading, setPageLoading] = useState({
        home: true,
        about: true,
        work: true,
        contact: true,
      });

  const value = {
    pageLoading,
    setPageLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
