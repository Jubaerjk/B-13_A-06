import './App.css'
import { Suspense, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import HeroBanner from './components/banner/HeroBanner'
import Highlight from './components/highlight/Highlight'
import Product from './components/products/Product'
import Process from './components/process/Process'
import Pricing from './components/pricing/Pricing'


// const fetchPricingCardData = async () => {
//   const res = await fetch('/pricingCard.json');
//   return res.json();
// }

const fetchCardData = fetch('/cardData.json')
  .then(res => res.json())





// const pricingCardData = fetch('/pricingCard.json')
//   .then(res => res.json())




function App() {
  // Promises
  const productDataPromise = fetchCardData;
  // const pricingDataPromise = fetchPricingCardData;

  const [cartNav, setCartNav] = useState(0);


  return (
    <>

      <Navbar cartNav={cartNav} />

      <HeroBanner />

      <Highlight />

      <Suspense
        fallback={<div><span className="loading loading-spinner text-accent"></span></div>}>
        <Product productDataPromise={productDataPromise} setCartNav={setCartNav} />
      </Suspense>

      {/* <Process /> */}

      {/* <Suspense fallback={<div><span className="loading loading-spinner text-accent"></span></div>}>
        <Pricing pricingDataPromise={pricingDataPromise} />
      </Suspense> */}

    </>
  )
}

export default App
