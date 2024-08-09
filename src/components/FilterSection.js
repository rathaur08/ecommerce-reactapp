import React from 'react'
import { useFilterContext } from './context/FilterContext';


const FilterSection = () => {
  const { all_products, filters: { text, category, company }, updateFilterValue } = useFilterContext();

  //  to get the UNIQUE data of each FiELDS
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    });

    return (newVal = ["all", ...new Set(newVal)]);
    // console.log("getUniqueData.. " + newVal)
  };


  // we need Uniqe data 
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input className='form-control' type='text' name='text'
            value={text} onChange={updateFilterValue} placeholder='Search'
          />
        </form>
      </div>
      <div className='filter-category'>
        <h3 className='mt-3'>Category</h3>
        <div className='btn-group-vertical'>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button key={index} className='btn btn-outline-primary' type='button'
                name="category" value={curElem} onClick={updateFilterValue}>{curElem}</button>
            );
          })}
        </div>
      </div>
      <div className='filter-company'>
        <h3 className='mt-3'>Company</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <select class="form-select" id="comany" onClick={updateFilterValue} aria-label="Default select example">
            {/* <option selected>Open this select option</option> */}
            {companyOnlyData.map((curElem, index) => {
              return (
                <option key={index} className='btn btn-outline-primary'
                  name="company" value={curElem} onClick={updateFilterValue}>{curElem}</option>
              )
            })}
          </select>
        </form>
      </div>
    </>
  )
}

export default FilterSection