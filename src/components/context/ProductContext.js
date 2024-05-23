// create a context
// provider
// consumer => useContext Hook

import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{ myName: "Sunny Rathaur" }}>
    {children}
  </AppContext.Provider>
};

// Custome Hooks
const useProductContext = () => {
  return  useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };