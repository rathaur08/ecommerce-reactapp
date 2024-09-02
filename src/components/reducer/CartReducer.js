const cartReducer = (state, action) => {

  if (action.type === "ADD_TO_CART") {
    let { id, amount, color, product } = action.payload;
    console.log("ADD_TO_CART", product)

    // tackle the existing product

    let existingProduct = state.cart.find((curItem) => curItem.id === id + color)

    console.log("existingProduct", existingProduct)

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          }
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {

      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      }

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }

  }

  // to  setDecrease, setIncrease 
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log(curElem)
        let decAmount = curElem.amount - 1;

        if (decAmount <= 0) {
          decAmount = 1;
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCRMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log(curElem)
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };

  }


  if (action.type === "REMOVE_ITEM") {

    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // CLEAR CART Data from localStorage
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    }
  }


  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialval, curElem) => {
      let { amount } = curElem;
      initialval = initialval + amount;
      return initialval;
    }, 0);
    return {
      ...state,
      total_item: updatedItemVal,
    }
  }

  // CART_TOTAL_PRICE value
  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialval, curElem) => {
      let {price, amount } = curElem;
      initialval = initialval + price * amount;
      return initialval;
    }, 0);
    return {
      ...state,
      total_price,
    }
  }


  return state;
}

export default cartReducer