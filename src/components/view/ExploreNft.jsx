import React from 'react'
import { MapCardTwodata } from '../../MapData';

const ExploreNft = () => {
    return (
        <div>
            <div className='container xl:w-[1140px] px-3 sm:px-5 xl:px-0 mx-auto '>
                <h2 className='text-black font-bold text-[32px] md:text-[42px] lg:text-xl break-words font-Josefin mt-12  sm:mt-16 md:mt-20 lg:mt-[86px] mb-10'>Explore top NFT</h2>
                <div className='flex flex-col  items-center '>
                    {MapCardTwodata.map((data) => {
                        return (
                            <div key={data.id} className='flex items-center justify-center  mb-3 ' >
                                <div className='px-[30px] py-[20px] border-[1px] border-solid rounded-3xl border-[#F2F2F2] flex shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] flex-col md:flex-row bg-white' >
                                    <div className='w-full sm:w-[355px] lg:w-[207px] h-full mx-auto'>
                                        <img className='w-full h-full object-cover rounded-3xl text-center' src={data.img} alt="img" />
                                    </div>
                                    <div className='w-full md:ps-5 lg:ps-8'>
                                        <h2 className='text-black font-Josefin text-[26px] lg:text-lg font-semibold leading-normal mt-3 md:mt-0'>{data.heading}</h2>
                                        <h2 className='text-black font-Josefin text-xsm md:text-sm font-semibold leading-[120%] opacity-70'>"{data.para}"</h2>
                                        <div className='flex flex-col lg:flex-row justify-between mt-4 lg:mt-8'>
                                            <div className='flex justify-between'>
                                                <p className='text-black font-Josefin text-xlg font-semibold leading-normal opacity-70'>{data.doller}</p>
                                                <div className='flex items-center lg:hidden'>
                                                    <img src={data.heart} alt="heart" />
                                                    <h2 className='text-xxsm text-black opacity-70 font-Josefin font-normal leading-normal ps-1 pt-[2px]'> {data.number}</h2>
                                                </div>
                                            </div>
                                            <div className='mt-4 text-center'>
                                                <button className='bg-transparent border-[1px] border-solid text-[#707070] border-[#707070] rounded-3xl h-[30px] w-[125px] text-xmd' >
                                                    {data.buynow}
                                                </button>
                                            </div>
                                            <div className=' hidden lg:block'>
                                                <img src={data.heart} alt="heart" />
                                                <h2 className='text-xxsm text-black opacity-70 font-Josefin font-normal leading-normal ps-1 pt-[2px]'> {data.number}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default ExploreNft