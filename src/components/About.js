import React, { useContext } from 'react';
import {useProductContext} from './context/ProductContext';

const About = () => {
  const {myName} = useProductContext();
  return (
    <div>
      About Page
      <h1>{myName}</h1>
    </div>
  )
}

export default About