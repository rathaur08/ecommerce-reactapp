import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from './context/CartContext';

const AddTOCart = ({ product, id }) => {
  const {addTOCart} = useCartContext();

  const { colors, stock } = product;

  const [color, setColor] = useState(colors[2])

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }

  return (
    <>
      <div className=''>
        <p>
          Colors :
          {colors.map((curColor, index) => {
            return <button key={index} style={{ background: curColor }}
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? <FaCheck style={{ color: 'white' }} /> : null}
            </button>
          })}
        </p>
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <div className="action">
        <NavLink to='/cart'
          onClick={() => addTOCart(id, amount, color, product)}
        >
          <button className="add-to-cart btn btn-default" type="button">add to cart</button>
        </NavLink>
        <button className="like btn btn-default ms-1" type="button"> ♡ </button>
      </div>
    </>
  )
}

export default AddTOCart