import React from 'react'
import { useFilterContext } from './context/FilterContext';


const FilterSection = () => {
  const { all_products, filters: { text, category }, updateFilterValue } = useFilterContext();

  //  to get the UNIQUE data of each FiELDS
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    })
    return newVal = ["All", ...new Set(newVal)];
    // console.log("getUniqueData.. " + newVal)
  };


  // we need Uniqe data 
  const categoryOnlyData = getUniqueData(all_products, "category");

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input className='' type='text' name='text'
            value={text} onChange={updateFilterValue} placeholder='Search'
          />
        </form>
      </div>
      <div className='filter-category'>
        <h3 className='mt-3'>Category</h3>
        <div className='d-flex'>
          {categoryOnlyData && categoryOnlyData.map((curElem, index) => {
            return <button key={index} type='button'
              name="category" value={curElem} onClick={updateFilterValue}>{curElem}</button>
          })}
        </div>
      </div>
    </>
  )
}

export default FilterSection