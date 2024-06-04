import React from 'react';
import FilterSection from './FilterSection';
import Sort from './Sort';
import ProductList from './ProductList';
import { useFilterContext } from './context/FilterContext';

const Products = () => {
  const {filter_products} = useFilterContext();
  console.log(`filter_products`,filter_products);
  return (
    <>
      <div className='row'>
        <div className='col-lg-3'>
          <div className=''>
            <FilterSection />
          </div>
        </div>
        <div className='col-lg-9'>
          <section className=''>
            <div className=''>
              <Sort />
            </div>
            <div className=''>
              <ProductList />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Products