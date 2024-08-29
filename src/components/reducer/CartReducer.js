const cartReducer = (state, action) => {

  if (action.type === "ADD_TO_CART") {
    let { id, amount, color, product } = action.payload;
    console.log("ADD_TO_CART", product)

    let cartProduct;

    cartProduct = {
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

  return state;
}

export default cartReducer