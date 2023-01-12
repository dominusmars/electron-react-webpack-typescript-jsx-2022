import React, { createContext, useContext, useState } from 'react';

export const globalContext = createContext();

export const useGlobal = () => {
  return useContext(globalContext);
};

export const GlobalProvider = ({ children }) => {
  return <globalContext.Provider value={{}}>{children}</globalContext.Provider>;
};
