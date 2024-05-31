import React, { useEffect, useState } from 'react';
import './AllStyle.css'
import { useParams } from 'react-router-dom';
import { useProductContext } from './context/ProductContext';

const SingleProduct = () => {

  const [mainImage, setMainImage] = useState(image[0]);

  const API = "https://api.pujakaitem.com/api/products";

  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  console.log(singleProduct);

  const { id } = useParams();

  // Note :- Change Name {id = alias} NAME
  const { id: alias, name, image } = singleProduct;

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
                    {/* <img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/523/original/VT-MUM.png?1705149628" /> */}
                    <img src={mainImage.url} alt={mainImage.filename} />
                  </div>
                  {/* <div className="tab-pane" id="pic-2"><img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/872/original/Jetsetyatra.webp?1712837969" /></div>
                  <div className="tab-pane" id="pic-3"><img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/743/original/Membership_Program_Mobile_banner.webp?1707306103" /></div>
                  <div className="tab-pane" id="pic-4"><img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/871/original/Jetsetwed.webp?1712837960" /></div>
                  <div className="tab-pane" id="pic-5"><img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/523/original/VT-MUM.png?1705149628" /></div> */}
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  {
                    image && image.map((curElm) => {
                      <li className="" key={curElm.id}>
                        <a data-target="#pic-1" data-toggle="tab">
                          <img src={curElm.url}
                            alt={curElm.filename}
                            onClick={() => setMainImage(curElm)}
                          />
                        </a>
                      </li>
                    })
                  }
                  {/* <li><a data-target="#pic-2" data-toggle="tab"><img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/872/original/Jetsetyatra.webp?1712837969" /></a></li>
                  <li><a data-target="#pic-3" data-toggle="tab"><img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/743/original/Membership_Program_Mobile_banner.webp?1707306103" /></a></li>
                  <li><a data-target="#pic-4" data-toggle="tab"><img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/871/original/Jetsetwed.webp?1712837960" /></a></li>
                  <li><a data-target="#pic-5" data-toggle="tab"><img src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/005/523/original/VT-MUM.png?1705149628" /></a></li> */}
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{name}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                <h4 className="price">current price: <span>$180</span></h4>
                <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                <h5 className="sizes">sizes:
                  <span className="size" data-toggle="tooltip" title="small">s</span>
                  <span className="size" data-toggle="tooltip" title="medium">m</span>
                  <span className="size" data-toggle="tooltip" title="large">l</span>
                  <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                </h5>
                <h5 className="colors">colors:
                  <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                  <span className="color green"></span>
                  <span className="color blue"></span>
                </h5>
                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button">add to cart</button>
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