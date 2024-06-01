import React, { useEffect, useState } from 'react';
import './AllStyle.css'
import { NavLink, useParams } from 'react-router-dom';
import { useProductContext } from './context/ProductContext';
import FormatPrice from './Helper/FormatPrice';
import Star from './Star';
import AddTOCart from './AddTOCart';

const SingleProduct = () => {

  // const [mainImage, setMainImage] = useState(image[0]);

  const API = "https://api.pujakaitem.com/api/products";

  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  console.log(singleProduct);

  const { id } = useParams();

  // Note :- Change Name {id = alias} NAME
  const { id: alias, name, image, stars, stock, price } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`)
  }, []);

  if (isSingleLoading) {
    return <div>........isLoading</div>
  }

  return (
    <>
      <div className=''>
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/523/original/VT-MUM.png?1705149628" height={450} />
                    {/* <img src={mainImage.url} alt={mainImage.filename} /> */}
                  </div></div>
                <ul className="preview-thumbnail nav nav-tabs">
                  {
                    image && image.map((curElm) => {
                      <li className="" key={curElm.id}>
                        <a href='*' data-target="#pic-1" data-toggle="tab">
                          <img src={curElm.url}
                            alt={curElm.filename}
                          // onClick={() => setMainImage(curElm)}
                          />
                        </a>
                      </li>
                    })
                  }
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{name}</h3>
                <div className="rating">
                  <div className="stars">
                    <Star stars={stars} />
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                <h4 className="price">current price: <span>{<FormatPrice price={price} />}</span></h4>
                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                <h5 className="sizes">sizes:
                  <span className="size" data-toggle="tooltip" title="small">s</span>
                  <span className="size" data-toggle="tooltip" title="medium">m</span>
                  <span className="size" data-toggle="tooltip" title="large">l</span>
                  <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                </h5>
                <h5 className="colors">
                  {stock > 0 && <AddTOCart product={singleProduct} />}
                </h5>
                
                <div className="action">
                  <NavLink to='/cart'>
                  <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                  </NavLink>
                  <button className="like btn btn-default ms-1" type="button"> ♡ </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct