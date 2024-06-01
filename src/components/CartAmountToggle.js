import React from 'react'

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <>
      <div className='d-flex'>
        <button onClick={() => setDecrease()}>-</button>
        <p className='m-2'>{amount}</p>
        <button onClick={() => setIncrease()}>+</button>
      </div>
    </>
  )
}

export default CartAmountToggle