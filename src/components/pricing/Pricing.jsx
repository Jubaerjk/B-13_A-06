import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({ pricingDataPromise }) => {
    const pricingData = use(pricingDataPromise);

    return (
        <>
            <div className='py-20'>
                <div className='text-center pb-10'>
                    <h2 className='text-5xl font-bold text-[#101727]'>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382] text-[18px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className='container mx-auto flex flex-wrap justify-center gap-4 '>

                    {pricingData.map((pricingData, id) => (
                        <PricingCard key={id} pricingData={pricingData} />
                    ))}

                </div>
            </div>
        </>
    );
};

export default Pricing;




