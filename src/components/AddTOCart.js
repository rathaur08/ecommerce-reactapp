import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";

const AddTOCart = ({ product }) => {

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[2])

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
              {color === curColor ? <FaCheck style={{color: 'white'}} /> : null}
            </button>
          })}
        </p>

      </div>
    </>
  )
}

export default AddTOCart