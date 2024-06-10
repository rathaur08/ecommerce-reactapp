import React from 'react'
import { useFilterContext } from './context/FilterContext'

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView } = useFilterContext();
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
          <select class="form-select" aria-label="Default select example">
            <option selected>Filter Product</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

      </div>
    </>
  )
}

export default Sort