import React from 'react'
import { useFilterContext } from './context/FilterContext';
import { FaCheck } from "react-icons/fa";
import FormatPrice from './Helper/FormatPrice';

const FilterSection = () => {
  const { all_products, filters: { text, color, maxPrice, price, minPrice }, updateFilterValue, clearFilters } = useFilterContext();

  //  to get the UNIQUE data of each FiELDS
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property]
    });

    if (property === 'colors') {
      // return (newVal = ["all", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    //  else {
    return (newVal = ["all", ...new Set(newVal)]);
    // }
  };
  // console.log("getUniqueData.. " + newVal)


  // we need Uniqe data 
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorOnlyData = getUniqueData(all_products, "colors");
  console.log("colorOnlyData.. " + colorOnlyData)

  return (
    <>
      <div className='filter-search'>
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
        <form action="#">
          <select className="form-select" id="comany" onClick={updateFilterValue} aria-label="Default select example">
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
      <div className='filter-colors'>
        <h3 className='mt-3'>Colors</h3>
        {colorOnlyData.map((curElem, index) => {
          if (curElem === "all") {
            return (
              <button key={index} type='button'
                name="color" value={curElem} onClick={updateFilterValue}>all</button>
            );
          }
          return (
            <button key={index} style={{ backgroundColor: curElem }}
              className='btnStyle' type='button' name="color" value={curElem} onClick={updateFilterValue}>
              {color === curElem ? <FaCheck style={{ color: 'white' }} /> : null}</button>
          );
        })}
      </div>
      <div className='filter-price'>
        <h3 className='mt-3'>price</h3>
        <p className=""> <FormatPrice price={price} /></p>
        <div>
          <input type="range" name='price' min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
          {/* <label for="cowbell">Cowbell</label> */}
        </div>
      </div>
      <div className='filter-clear'>
        <button button className='btn btn-danger' type='button' onClick={clearFilters}>Filter Clears</button>
      </div>
    </>
  )
}

export default FilterSection