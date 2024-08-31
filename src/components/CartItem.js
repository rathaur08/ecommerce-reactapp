import React from 'react';
import FormatPrice from './Helper/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from './context/CartContext';


const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem } = useCartContext();

  const setDecrease = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }
  const setIncrease = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  return (
    <tr>
      <th>
        <div className='d-flex'>
          <div className='image-container'>
            <figure className=''>
              <img className='cartitem-img' src={image} alt={id} />
            </figure>
          </div>
          <div className='text-container ms-2'>
            <p>{name}</p>
            <p className='d-flex'>color:
              <div className='rounded-circle' style={{ backgroundColor: color, color: color }}> . </div>
            </p>
          </div>
        </div>
      </th>
      <td>
        <FormatPrice price={price} />
      </td>
      <td>
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </td>
      {/*  subtotal */}
      <td>
        <FormatPrice price={price * amount} />
      </td>

      {/* Remove Cart */}
      <td>
        <FaTrash className='remove_item' onClick={() => removeItem(id)} />
      </td>
    </tr>
  )
}

export default CartItem