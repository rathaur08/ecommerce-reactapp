import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer"

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTOCart = (id, amount, color, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, color, product } })
  };

  return (
    <CartContext.Provider value={{ ...state, addTOCart }}>
      {children}
    </CartContext.Provider>
  )
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };