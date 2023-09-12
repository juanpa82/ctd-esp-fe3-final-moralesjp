
import React, { createContext, useState, useContext, useMemo } from "react";

//export const initialState = {theme: ""}
  
export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
   const [theme, setTheme] = useState('light');
   const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
   }
   const memoizedTheme = useMemo (() => theme, [theme]); 
   
  return (
    <ContextGlobal.Provider value={{ theme: memoizedTheme, toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};


export function useTheme() {
  return useContext(ContextGlobal).theme;
}

export function useToggleTheme() {
  return useContext(ContextGlobal).toggleTheme;
}
