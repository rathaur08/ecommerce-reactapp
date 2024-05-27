// create a context
// provider
// consumer => useContext Hook

import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.restful-api.dev/objects"

const AppProvider = ({ children }) => {

  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    console.log(`products List`, products)
  }

  useEffect(() => {
    getProducts(API)
  }, []);


  return <AppContext.Provider value={{ myName: "Sunny Rathaur" }}>
    {children}
  </AppContext.Provider>
};

// Custome Hooks
const useProductContext = () => {
  return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };