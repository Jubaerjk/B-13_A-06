import React, { use } from 'react';
import PricingCard from './PricingCard';

const Pricing = ({ pricingDataPromise }) => {
    const pricingData = use(pricingDataPromise);

    return (
        <>
            <div className='text-center pt-20 pb-10'>
                <h2 className='text-5xl font-bold text-[#101727]'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382] text-[18px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='container mx-auto flex justify-between gap-4'>

                {pricingData.map((pricingData, id) => (
                    <PricingCard key={id} pricingData={pricingData} />
                ))}

            </div>
        </>
    );
};

export default Pricing;




