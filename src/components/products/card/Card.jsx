import React, { useState } from 'react'

const Card = ({ productCard, setCartNav, selectedProduct, setSelectedProduct }) => {
    const { name, description, price, period, tagType, features, icon } = productCard;

    // For Card Button State
    const [addedToCart, setAddedToCart] = useState(false);

    // For Card Button Click
    const handleAddToCart = () => {
        setAddedToCart(!addedToCart);
        setSelectedProduct([...selectedProduct, productCard]);
        setCartNav(prev => prev + 1);
    }

    return (
        <>
            <div className="card bg-base-100 border border-[#E1E7FF] shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <img className='w-6 h-6' src={icon} alt="" />
                        <span className="badge badge-xs badge-warning">{tagType}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl text-[#101727] font-bold">{name}</h2>
                        <p className='text-[#627382]'>{description}</p>
                        <p className="text-xl font-bold">
                            {price}
                            <span className='text-[#627382] text-sm font-normal'>/{period}</span>
                        </p>
                    </div>
                    <ul className="flex flex-col gap-2 my-4">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#627382]">{features[0]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#627382]">{features[1]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#627382]">{features[2]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#627382]">{features[3]}</span>
                        </li>
                    </ul>

                    <button
                        onClick={handleAddToCart}
                        className={`btn rounded-full btn-block ${addedToCart ? 'bg-[#E1E7FF] text-[#9514FA]' : 'active_btn'}`}
                        disabled={addedToCart}>
                        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>

                </div>
            </div >
        </>
    )
}

export default Card
