import React, { use } from 'react';

const Pricing = ({ pricingDataPromise }) => {
    const pricingData = use(pricingDataPromise);
    const { name, description, price, duration, services } = pricingData;

    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body relative">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p className="text-[#627382]">{description}</p>
                <span className="text-xl">${price}/{duration}</span>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {services.map((service, i) => (
                        <li key={i}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Pricing;




