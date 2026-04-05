import React from 'react'

const CartProduct = ({ selectedProduct, setSelectedProduct, setCartNav }) => {
    const totalPrice = selectedProduct.reduce(
        (total, product) => total + Number(product.price),
        0
    );

    const handleRemoveFromCart = (index) => {
        setSelectedProduct(selectedProduct.filter((_, i) => i !== index));
        setCartNav(prev => prev - 1);

    }

    return (
        <>
            <div className='container mx-auto border border-[#E1E7FF] rounded-2xl p-8'>
                <h2 className='text-2xl font-bold mb-6'>Your Cart</h2>

                {selectedProduct.length === 0 ? (
                    <div className='space-y-2 container mx-auto text-center pt-20 pb-10 bg-[#f5f5f5] rounded-2xl'>
                        <h2 className='text-5xl font-bold text-[#101727]'>
                            No Item Available in Cart
                        </h2>
                        <p className='text-[#627382] text-[18px]'>
                            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                        </p>
                    </div>
                ) : (
                    <div className="cart ">
                        {selectedProduct.map((productCard, index) => {
                            return (
                                <div key={index} className='flex justify-between items-center bg-[#f5f5f5] rounded-2xl p-4 mb-4'>
                                    <div className='flex gap-2'>
                                        <div className='bg-white p-2 rounded-full'>
                                            <img src={productCard.icon} alt="" />
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='text-lg font-bold'>{productCard.name}</p>
                                            <p className='font-bold text-[#627382]'>{productCard.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => handleRemoveFromCart(index)} className='text-[#9514FA] font-semibold'>Remove</button>
                                    </div>

                                </div>
                            )
                        })}
                        <div className='flex justify-between items-center p-4'>
                            <p className='text-[#627382] font-semibold'>Total:</p>
                            <p className='text-[#101727] font-bold'>${totalPrice}</p>
                        </div>
                        <button className='btn bg-linear-to-l from-[#9514FA] to-[#53008F] text-white rounded-full w-full my-4'>Proceed to Checkout</button>
                    </div>
                )}
            </div>

        </>
    )
}

export default CartProduct