import React from 'react'
import { useFilterContext } from './context/FilterContext';


const FilterSection = () => {
  const { filters: { text }, updateFilterValue } = useFilterContext();

  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input className='' type='text' name='text'
            value={text} onChange={updateFilterValue}
          />
        </form>
      </div>
    </>
  )
}

export default FilterSection