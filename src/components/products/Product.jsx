import { use, useState } from 'react'
import AllProduct from './productType/AllProduct'
import CartProduct from './productType/CartProduct'

const Product = ({ productDataPromise, cartNav, setCartNav }) => {
    const productCard = use(productDataPromise);

    const [activeTab, setActiveTab] = useState('allProduct');
    const [selectedProduct, setSelectedProduct] = useState([]);

    return (
        <>
            <div className='py-20'>
                {/* Header Section */}
                <div className='space-y-2 container mx-auto text-center pb-10'>
                    <h2 className='text-5xl font-bold text-[#101727]'>
                        Premium Digital Tools
                    </h2>
                    <p className='text-[#627382] text-[18px]'>
                        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                    </p>
                    <div className='flex gap-4 justify-center'>
                        <button onClick={() => setActiveTab('allProduct')} className={`btn btn-sm ${activeTab === 'allProduct' ? 'active_btn' : 'bg-[#E1E7FF] text-[#9514FA]'} rounded-full`}>All Products <span>({productCard.length})</span></button>
                        <button onClick={() => setActiveTab('cartProduct')} className={`btn btn-sm ${activeTab === 'cartProduct' ? 'active_btn' : 'bg-[#E1E7FF] text-[#9514FA]'} rounded-full`}>Cart <span>({cartNav})</span></button>
                    </div>
                </div>

                {/* Product Card Section */}
                <div className='container mx-auto p-4'>
                    {activeTab === 'allProduct' ? (
                        <AllProduct productCard={productCard} setCartNav={setCartNav} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
                    ) : (
                        <CartProduct selectedProduct={selectedProduct} cartNav={cartNav} setCartNav={setCartNav} setSelectedProduct={setSelectedProduct} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Product
