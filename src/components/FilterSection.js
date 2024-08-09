import React from 'react'
import { useFilterContext } from './context/FilterContext';


const FilterSection = () => {
  const { all_products, filters: { text }, updateFilterValue } = useFilterContext();

  //  to get the UNIQUE data of each FiELDS
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    })
    newVal = ["All", ...new Set(newVal)];
    console.log("getUniqueData " + newVal)
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
    </>
  )
}

export default FilterSection