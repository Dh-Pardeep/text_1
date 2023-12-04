import React from 'react'

const UpcommingCard = () => {
    return (
        <div>
            <div className='container xl:w-[1140px] px-3 sm:px-5 xl:px-0 mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-36'>
                <div className='w-full flex-col lg:flex-row flex items-center gap-6'>
                    <div className='w-full  lg:w-1/2 '>
                        <div className='upcomming_img_one bg-no-repeat bg-cover bg-center rounded-3xl px-5'>
                            <h2 className=' text-[32px] md:text-[42px] lg:text-xl text-white font-Josefin pt-10 text-center mb-7 leading-normal' >Upcoming top nfts</h2>
                            <p className='text-white opacity-70 font-Josefin font-semibold text-sm leading-[120%] text-center mx-auto  max-w-[445px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            <div className='text-center mt-14 pb-7'>
                                <button className='bg-white border-[1px] border-solid text-black border-[#707070] rounded-3xl h-[36px] w-[144px] text-xmd font-Josefin font-bold text-center' >
                                    Explore more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full  lg:w-1/2'>
                        <div className='upcomming_img_two bg-no-repeat bg-cover bg-center rounded-3xl px-5'>
                            <h2 className=' text-[32px] md:text-[42px] lg:text-xl text-white font-Josefin pt-10 text-center mb-7 leading-normal' >Upcoming top nfts</h2>
                            <p className='text-white opacity-70 font-Josefin font-semibold text-sm leading-[120%] text-center mx-auto  max-w-[445px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            <div className='text-center mt-14 pb-7'>
                                <button className='bg-white border-[1px] border-solid text-black border-[#707070] rounded-3xl h-[36px] w-[144px] text-xmd font-Josefin font-bold text-center' >
                                    Explore more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcommingCard