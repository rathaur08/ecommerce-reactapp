const filterReducer = (state, action) => {

  switch (action.type) {

    case "LOAD_FILTER_PRODUCTS":

      let priceArr = action.payload.map((curElem) => curElem.price);
      console.log("price Array" + priceArr);

      // step 1 get high priceArr value 
      // console.log("maxPrice value 1 " + Math.max.apply(null, priceArr));

      // step 2 get high priceArr value 
      // let maxPrice = priceArr.reduce((initalval, curVal) => Math.max(initalval, curVal), 0);
      // console.log("maxPrice value 2 " + maxPrice);

      // step 3 get high priceArr value
      let maxPrice = Math.max(...priceArr);
      console.log("maxPrice value 3 ", maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
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
      // let userSortValue = document.getElementById("sort")
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(`sort_value`, sort_value)
      return {
        ...state,
        sorting_value: action.payload,
      }

    case "SORTING_PRODUCTS":
      let newSortdata;
      // let tempSortProduct = [...action.payload];
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {

        if (sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name)
        }

        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name)
        }

      };

      newSortdata = tempSortProduct.sort(sortingProducts)

      return {
        ...state,
        filter_products: newSortdata,
      }

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElen) => {
          return curElen.name.toLowerCase().includes(text);
          // return curElen.name.toLowerCase().startsWith(text);
        })
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category === category
        );
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.colors.includes(color)
        );
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price === price
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      }

    default:
      return state;
  }

};
export default filterReducer;