const filterReducer = (state, action) => {

  switch (action.type) {

    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      }

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      }

    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort")
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      console.log(`sort_value`, sort_value)
      return {
        ...state,
        sorting_value: sort_value,
      }

    case "SORTING_PRODUCTS":
      let newSortdata;
      let tempSortProduct = [...action.payload];

      if (state.sorting_value === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        }
        newSortdata = tempSortProduct.sort(sortingProducts)
      }

      if (state.sorting_value === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        }
        newSortdata = tempSortProduct.sort(sortingProducts)
      }

      if (state.sorting_value === "a-z") {
        newSortdata = tempSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      }

      if (state.sorting_value === "z-a") {
        newSortdata = tempSortProduct.sort((a, b) =>
          b.name.localeCompare(a.name)
        )
      }

      return {
        ...state,
        filter_products: newSortdata,
      }

    default:
      return state;
  }

};

export default filterReducer;