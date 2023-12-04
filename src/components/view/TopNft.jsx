import React from 'react'
import { MapCarddata } from '../../MapData';

const TopNft = () => {
    return (
        <div>
            <div className='container xl:w-[1140px] px-3 sm:px-5 xl:px-0 mx-auto '>
                <h2 className='text-black font-bold text-[32px] md:text-[42px] lg:text-xl break-words font-Josefin mt-12 sm:mt-16 md:mt-20 lg:mt-[86px] mb-10'>Top NFT to look out for in 2022</h2>
                <div className='flex flex-wrap justify-center'>
                    {MapCarddata.map((data) => {
                        return (
                            <div key={data.id} className='flex items-center justify-center w-[228px] mb-1' >
                                <div className='px-[10px] py-[15px] border-[1px] border-solid rounded-3xl border-[#F2F2F2] mx-[2px] shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] bg-white' >
                                    <div className=' flex items-center justify-center pb-[10px]'>
                                        <img className='w-full rounded-3xl' src={data.img} alt="img" />
                                    </div>
                                    <div className=''>
                                        <h2 className='text-black font-Josefin text-md font-semibold leading-normal '>{data.heading}</h2>
                                    </div>
                                    <div className='flex justify-between mt-2'>
                                        <p className='text-black font-Josefin text-xsm font-semibold leading-normal opacity-70'>{data.doller}</p>
                                        <div className='flex items-center '>
                                            <img src={data.heart} alt="heart" />
                                            <h2 className='text-xxsm text-black opacity-70 font-Josefin font-normal leading-normal ps-1 pt-[2px]'> {data.number}</h2>
                                        </div>
                                    </div>
                                    <div className='mt-4 text-center'>
                                        <button className='bg-transparent border-[1px] border-solid text-[#707070] border-[#707070] rounded-3xl h-[30px] w-[125px] text-xmd' >
                                            {data.buynow}
                                        </button>
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

export default TopNft