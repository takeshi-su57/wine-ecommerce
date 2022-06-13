import { createContext } from 'react';
import { propsProvider } from './types';

export const AppContext = createContext('');

export const AppProvider = ({ children }: propsProvider) => {
  
  return (
    <AppContext.Provider value={''}>
      { children }
    </AppContext.Provider>
  );
};
