"use client"
import React, { createContext, useContext, useRef } from "react";

// Initialize the ref in the context creation
const RootRefContext = createContext<React.RefObject<HTMLDivElement>>({
  current: null
});

export const useRootRef = () => useContext(RootRefContext);

// Create a provider component that initializes the ref
export const RootRefProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const stickyRef = useRef<HTMLDivElement>(null);

  return (
    <RootRefContext.Provider value={stickyRef}>
      {children}
    </RootRefContext.Provider>
  );
};