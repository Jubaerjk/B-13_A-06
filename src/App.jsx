import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroBanner from './components/banner/HeroBanner'
import Highlight from './components/highlight/Highlight'
import Product from './components/products/Product'


function App() {


  return (
    <>

      <Navbar />

      <HeroBanner />

      <Highlight />

      <Product />

    </>
  )
}

export default App
