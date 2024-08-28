const cartReducer = (state, action) => {

  if (action.type === "ADD_TO_CART") {
    let { id, amount, color, product } = action.payload;
    console.log("ADD_TO_CART", product)
    console.log("ADD_TO_CART color", color)
  }

  return state;
}

export default cartReducer