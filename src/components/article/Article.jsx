import React from 'react'

const Article = () => {
    return (
        <>
            <div className=''>
                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 text-center space-y-6'>
                    <div className='space-y-2'>
                        <h2 className='text-4xl font-extrabold text-white'>Ready to Transform Your Workflow?</h2>
                        <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                    </div>

                    <div className='flex gap-4 justify-center'>
                        <button className='btn bg-white text-[#9514FA] rounded-full'>Explore Products</button>
                        <button className='btn btn-outline text-white rounded-full'>View Pricing</button>
                    </div>
                    <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </>
    )
}

export default Article