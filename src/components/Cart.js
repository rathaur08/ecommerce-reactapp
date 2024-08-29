import React from 'react';
import { useCartContext } from "./context/CartContext";
import CartItem from './CartItem';

const Cart = () => {
  const { cart } = useCartContext();
  console.log("cart", cart);

  return (
    <div className='cart-container'>
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantety</th>
            <th scope="col">SubTotal</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Cart