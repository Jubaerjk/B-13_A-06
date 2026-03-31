import React from 'react'

const Highlight = () => {
    return (
        <div>
            {/* Highlight Section */}
            <div className="highlight bg-linear-to-l from-[#9514FA] to-[#5210C4] py-15">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-around items-center">
                        <div className="space-y-2">
                            <h2 className="text-5xl font-bold text-white">50K+</h2>
                            <p className="text-white/80 text-[18px]">
                                Active Users
                            </p>
                        </div>

                        <div class="divider divider-horizontal"></div>

                        <div className="space-y-2">
                            <h2 className="text-5xl font-bold text-white">200+</h2>
                            <p className="text-white/80 text-[18px]">
                                Premium Tools
                            </p>
                        </div>

                        <div class="divider divider-horizontal"></div>

                        <div className="space-y-2">
                            <h2 className="text-5xl font-bold text-white">4.9</h2>
                            <p className="text-white/80 text-[18px]">
                                Rating
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlight;