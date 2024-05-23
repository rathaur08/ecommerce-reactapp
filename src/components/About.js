import React, { useContext } from 'react';
import { AppContext } from './context/ProductContext';

const About = () => {
  const {myName} = useContext(AppContext);
  return (
    <div>
      About Page
      <h1>{myName}</h1>
    </div>
  )
}

export default About