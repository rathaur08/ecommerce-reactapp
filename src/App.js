import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';
import ErrorPage from './components/ErrorPage'
import Header from './components/Header';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// Source Links
// https://github.com/thapatechnical/thapareactecom

// Video -8