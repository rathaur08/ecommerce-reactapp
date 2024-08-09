import React from 'react'
import FormatPrice from './Helper/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({ products }) => {
  return (
    <>
      {
        products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="card mb-3 p-2" key={id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={image} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text m-0"> <FormatPrice price={price} /></p>
                    <p className="card-text">{description.slice(0, 99)}</p>
                    <NavLink to={`/singleproduct/${id}`} type="button" className="btn btn-primary">Read More</NavLink>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default ListView