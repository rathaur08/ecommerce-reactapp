// create a context
// provider
// consumer => useContext Hook

import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{ myName: "Sunny Rathaur" }}>
    {children}
  </AppContext.Provider>
};

export { AppProvider, AppContext };