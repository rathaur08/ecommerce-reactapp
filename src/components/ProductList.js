import React from 'react';
import { useFilterContext } from './context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filter_products, setGridView } = useFilterContext();
  console.log(`filter_products`, filter_products);

  if (setGridView) {
    return <GridView products={filter_products} />
  }

  if (setGridView === false) {
    return <ListView products={filter_products} />
  }


}

export default ProductList