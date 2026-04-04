import React from 'react'
import ProductCard from './AllProduct'

const CartProduct = ({ cartProduct }) => {
    return (
        <>
            {cartProduct.length === 0 ? (
                <div className='space-y-2 container mx-auto text-center pt-20 pb-10'>
                    <h2 className='text-5xl font-bold text-[#101727]'>
                        No Item Available in Cart
                    </h2>
                    <p className='text-[#627382] text-[18px]'>
                        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                    </p>
                </div>
            ) : (
                <div className="cart ">
                    {cartProduct.map((productCard, index) => (
                        <ProductCard key={index} productCard={productCard} />
                    ))}
                </div>
            )}
        </>
    )
}

export default CartProduct