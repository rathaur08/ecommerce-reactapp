import React from 'react';
import { useCartContext } from "./context/CartContext";
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import FormatPrice from './Helper/FormatPrice';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  // USE Auth0 Login Function
  const { isAuthenticated, user } = useAuth0();

  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log("cart", cart);

  if (cart.length === 0) {
    return (
      <div>
        <h1 className='text-center mt-5'>No Cart in item</h1>
      </div>
    )
  }

  return (
    <div className='cart-container mt-3'>
      {isAuthenticated && (
        <div className='d-flex'>
          <img className='' width={50} src={user.picture} alt={user.name} />
          <h2 className='ms-3'>{user.name}</h2>
        </div>
      )}
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
      <div className='d-flex justify-content-between'>
        <NavLink to="/products">
          <button type="button" class="btn btn-primary">Continue Shopping</button>
        </NavLink>
        <button type="button" class="btn btn-danger" onClick={clearCart}>Clear Cart</button>
      </div>
      <div className='d-flex justify-content-end mt-4'>
        <div>
          <p> SubTotal: <FormatPrice price={total_price} /> </p>
          <p> Shipping fee: <FormatPrice price={shipping_fee} /> </p>
          <p>Order Total: <FormatPrice price={shipping_fee + total_price} /> </p>
        </div>
      </div>
    </div>
  )
}

export default Cart