import { IoPersonOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";

const Process = () => {
    return (
        <>
            <div className='bg-[#F5F7FA]'>
                <div className='space-y-6 container mx-auto text-center py-20'>
                    <div className="header">
                        <h2 className='text-5xl font-bold text-[#101727]'>
                            Get Started in 3 Steps
                        </h2>
                        <p className='text-[#627382] text-[18px]'>
                            Start using premium digital tools in minutes, not hours.
                        </p>
                    </div>

                    <div className="process flex justify-center flex-wrap gap-6">
                        <div className="process-item card bg-base-100 border border-[#E1E7FF] shadow-sm">
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <span className="w-6 h-6"></span>
                                    <span className="badge badge-xs active_btn rounded-full text-white w-8 h-8 flex items-center justify-center">
                                        01
                                    </span>
                                </div>
                                <div className='flex justify-center'>
                                    <figure className='bg-[#F5F7FA] h-25 w-25 rounded-full flex items-center justify-center'>
                                        <IoPersonOutline className='text-6xl text-[#9514FA]' />
                                    </figure>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl text-[#101727] font-bold">Create Account</h2>
                                    <p className='text-[#627382]'>Sign up with your email or Google account to get started.</p>
                                </div>
                            </div>
                        </div>
                        <div className="process-item card w-96 bg-base-100 border border-[#E1E7FF] shadow-sm">
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <span className="w-6 h-6"></span>
                                    <span className="badge badge-xs active_btn rounded-full text-white w-8 h-8 flex items-center justify-center">
                                        02
                                    </span>
                                </div>
                                <div className='flex justify-center'>
                                    <figure className='bg-[#F5F7FA] h-25 w-25 rounded-full flex items-center justify-center'>
                                        <BsBoxSeam className='text-6xl text-[#9514FA]' />
                                    </figure>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl text-[#101727] font-bold">Choose Products</h2>
                                    <p className='text-[#627382]'>Browse our catalog and select the tools that match your needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="process-item card w-96 bg-base-100 border border-[#E1E7FF] shadow-sm">
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <span className="w-6 h-6"></span>
                                    <span className="badge badge-xs active_btn rounded-full text-white w-8 h-8 flex items-center justify-center">
                                        03
                                    </span>
                                </div>
                                <div className='flex justify-center'>
                                    <figure className='bg-[#F5F7FA] h-25 w-25 rounded-full flex items-center justify-center'>
                                        <IoPersonOutline className='text-6xl text-[#9514FA]' />
                                    </figure>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-2xl text-[#101727] font-bold">Start Creating</h2>
                                    <p className='text-[#627382]'>Download and use your tools instantly after purchase.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Process
