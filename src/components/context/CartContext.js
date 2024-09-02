import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/CartReducer"

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("ecomCart")

  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
}

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTOCart = (id, amount, color, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, color, product } })
  };

  // increment and decrement the cart item product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id })
  }

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCRMENT", payload: id })
  }

  // to remove the indivisual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  // clear cart  all data
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  // to add cart item in local storage
  // get vs set

  useEffect(() => {
    // get value total cart items
    dispatch({ type: "CART_TOTAL_ITEM" })
    dispatch({ type: "CART_TOTAL_PRICE" })
    localStorage.setItem("ecomCart", JSON.stringify(state.cart))
  }, [state.cart]);


  return (
    <CartContext.Provider value={{ ...state, addTOCart, removeItem, clearCart, setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  )
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };