import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from './context/ProductContext';

const SingleProduct = () => {
  const API = "https://api.restful-api.dev/objects";

  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  console.log(singleProduct);

  const { id } = useParams();

  // Note :- Change Name {id = alias} NAME
  const {id: alias, name, data} = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`)
  }, []);

  return (
    <>
      <div>
        <h1>SingleProduct id: {alias}</h1>
        <h1>Name: {name}</h1>
      </div>
    </>
  )
}

export default SingleProduct