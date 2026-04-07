import { FaCheck } from "react-icons/fa";
const PricingCard = ({ pricingData }) => {
    const { name, description, price, duration, services } = pricingData;
    return (
        <>
            {name !== "Pro" ? (
                <div className="card w-96 bg-[#F9FAFC] shadow-sm">
                    <div className="card-body relative flex flex-col gap-6 p-6">

                        {/* Card Header */}
                        <div className="header">
                            <h2 className="text-2xl font-bold text-[#101727]">{name}</h2>
                            <p className="text-[#627382]">{description}</p>
                        </div>

                        {/* Card Body */}
                        <div className='flex-1'>
                            <p className="mb-6"><span className="text-[#101727] text-4xl font-bold">${price}</span><span className="text-[#627382] text-xl">/{duration}</span></p>
                            <ul className="flex flex-col gap-2">
                                {services.map((service, id) => (
                                    <li className="flex items-center gap-2" key={id}> <FaCheck className="text-[#05e499]" />{service}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Card Footer */}
                        <button className="btn btn-sm bg-linear-to-l from-[#9514FA] to-[#5210C4] text-white rounded-full">Choose Plan</button>
                    </div>
                </div>
            ) : (
                <div className="card w-96 bg-linear-to-l from-[#9514FA] to-[#5210C4] text-white shadow-sm">
                    <div className="card-body relative flex flex-col gap-6 p-6">
                        <div className="badge font-medium rounded-full bg-[#FEF3C6] text-[#BB4D00] absolute -top-3 left-1/2 -translate-x-1/2">
                            Popular
                        </div>

                        {/* Card Header */}
                        <div className="header">
                            <h2 className="text-2xl font-bold">{name}</h2>
                            <p className="text-[#627382]">{description}</p>
                        </div>

                        {/* Card Body */}
                        <div className='flex-1'>
                            <p className="mb-6"><span className="text-4xl font-bold">${price}</span><span className="text-xl">/{duration}</span></p>
                            <ul className="flex flex-col gap-2">
                                {services.map((service, id) => (
                                    <li className="flex items-center gap-2" key={id}> <FaCheck className="text-[#05e499]" />{service}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Card Footer */}
                        <button className="btn btn-sm bg-white text-[#9514FA] rounded-full">Start Pro Trial</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PricingCard;