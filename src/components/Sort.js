import React from 'react'
import { useFilterContext } from './context/FilterContext'

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } = useFilterContext();
  return (
    <>
      <div className='row'>
        <div className='col'>
          <button type="button" onClick={setGridView} className={grid_view ? "btn btn-dark active" : "btn btn-dark"}>Grid </button>

          <button type="button" onClick={setListView} className={grid_view ? "btn btn-dark ms-1" : "btn btn-dark ms-1 active"}> List</button>
        </div>
        <div className='col'>
          {`${filter_products.length}`} Total Products
        </div>
        <div className='col'>
          <select class="form-select" id='sort' onClick={sorting} aria-label="Default select example">
            {/* <option disabled>Filter Product</option> */}
            <option value="lowest">Price(Lowest)</option>
            <option value="highest">Price(Highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </div>

      </div>
    </>
  )
}

export default Sort