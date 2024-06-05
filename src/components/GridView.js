import React from 'react'
import Product from './Product'

const GridView = ({ products }) => {
  return (
    <>
      <div className='d-flex flex-wrap justify-content-between gap-3'>
        {
          products.map((curElem) => {
            return <Product key={curElem} {...curElem} />
          })
        }
      </div>
    </>
  )
}

export default GridView