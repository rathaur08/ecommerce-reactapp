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
            <div class="card mb-3 p-2" key={id}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={image} class="img-fluid rounded-start" alt={name} />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text m-0"> <FormatPrice price={price} /></p>
                    <p class="card-text">{description.slice(0, 99)}</p>
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