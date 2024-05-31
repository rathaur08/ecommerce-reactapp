import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from './Helper/FormatPrice'

const Product = (curElem) => {
  const { id, name, price } = curElem
  return (
    <NavLink to={`/singleproduct/${id}`} className='card w-25 mb-3'>
      <div className="">
        <img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/523/original/VT-MUM.png?1705149628" className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text ">{<FormatPrice price={price} />}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </NavLink>
  )
}

export default Product