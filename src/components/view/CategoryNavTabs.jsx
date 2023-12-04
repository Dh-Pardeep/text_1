import React, { useState } from 'react'
import { MapCardTabsdata } from '../../MapData';

const CategoryNavTabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <div>
            <div className='container xl:w-[1140px] px-3 sm:px-5 xl:px-0 mx-auto '>
                <h2 className='text-black font-bold text-[32px] md:text-[42px] lg:text-xl break-words font-Josefin mt-12 sm:mt-16 md:mt-20 lg:mt-24 mb-7 text-center ' data-aos="fade-down">Top NFT by Category</h2>
                <p className='text-black opacity-70 leading-[120%] font-semibold text-sm font-Josefin max-w-[858px] mx-auto text-center mb-12  sm:mb-16 'data-aos="fade-down">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>

                <div className=" mx-auto">
                    <div className="flex items-center justify-center flex-wrap gap-4 md:gap-6" data-aos="fade-down">
                        <div
                            className={`cursor-pointer${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabClick(1)}
                        >
                            <button className='h-10 w-[170px] rounded-[10px] text-black hover:text-white flex justify-center items-center bg-[#D9D9D9] hover:bg-[black] transition-all ease-in-out duration-200  '>Sport</button>
                        </div>
                        <div
                            className={`cursor-pointer${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabClick(2)}
                        >
                            <button className='h-10 w-[170px] rounded-[10px] text-black hover:text-white flex justify-center items-center bg-[#D9D9D9] hover:bg-[black] transition-all ease-in-out duration-200 '>Art</button>
                        </div>
                        <div
                            className={`cursor-pointer${activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabClick(3)}
                        >
                            <button className='h-10 w-[170px] rounded-[10px] text-black hover:text-white flex justify-center items-center bg-[#D9D9D9] hover:bg-[black] transition-all ease-in-out duration-200 '>Music</button>
                        </div>
                        <div
                            className={`cursor-pointer${activeTab === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabClick(4)}
                        >
                            <button className='h-10 w-[170px] rounded-[10px] text-black hover:text-white flex justify-center items-center bg-[#D9D9D9] hover:bg-[black] transition-all ease-in-out duration-200 '>Fashion</button>
                        </div>
                        <div
                            className={`cursor-pointer${activeTab === 5 ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleTabClick(5)}
                        >
                            <button className='h-10 w-[170px] rounded-[10px] text-black hover:text-white flex justify-center items-center bg-[#D9D9D9] hover:bg-[black] transition-all ease-in-out duration-200 '>Memes</button>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 ">
                        {activeTab === 1 && <p>
                            <div className='flex flex-wrap justify-center'data-aos="zoom-in">
                                {MapCardTabsdata.map((data) => {
                                    return (
                                        <div key={data.id} className='flex items-center justify-center w-[266px] mb-6' >
                                            <div className='p-4 border-[1px] border-solid rounded-3xl border-[#F2F2F2] mx-3 shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] bg-white' >
                                                <div>
                                                    <h2 className='font-Josefin text-black text-xmd font-medium leading-normal'>{data.rank}</h2>
                                                </div>
                                                <div className=' flex items-center justify-center pt-[10px] mb-5'>
                                                    <img className='w-full rounded-3xl' src={data.img} alt="img" />
                                                </div>
                                                <h2 className='text-black font-Josefin text-md font-semibold leading-normal '>{data.heading}</h2>
                                                <div className='flex justify-between mt-2'>
                                                    <p className='text-black font-Josefin text-xsm font-semibold leading-normal opacity-70'>{data.doller}</p>
                                                    <div className='flex items-center '>
                                                        <img src={data.heart} alt="heart" />
                                                        <h2 className='text-xxsm text-black opacity-70 font-Josefin font-normal leading-normal ps-1 pt-[2px]'> {data.number}</h2>
                                                    </div>
                                                </div>
                                                <div className='mt-4 text-center'>
                                                    <button className='bg-transparent border-[1px] border-solid text-[#707070] border- [#707070] font-Josefin rounded-3xl h-[30px] w-[125px] pt-[3px] text-sm md:text-xmd  hover:bg-black hover:text-white   transition-all ease-in-out duration-200  hover:border-black  shadow-black' >
                                                        {data.buynow}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                                }
                            </div>
                        </p>}
                        {activeTab === 2 && <p>  <div className='flex flex-wrap flex-row-reverse justify-center'data-aos="zoom-in">
                            {MapCardTabsdata.map((data) => {
                                return (
                                    <div key={data.id} className='flex items-center justify-center w-[266px] mb-6' >
                                        <div className='p-4 border-[1px] border-solid rounded-3xl border-[#F2F2F2] mx-3 shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] bg-white' >
                                            <div>
                                                <h2 className='font-Josefin text-black text-xmd font-medium leading-normal'>{data.rank}</h2>
                                            </div>
                                            <div className=' flex items-center justify-center pt-[10px] mb-5'>
                                                <img className='w-full rounded-3xl' src={data.img} alt="img" />
                                            </div>
                                            <h2 className='text-black font-Josefin text-md font-semibold leading-normal '>{data.heading}</h2>
                                            <div className='flex justify-between mt-2'>
                                                <p className='text-black font-Josefin text-xsm font-semibold leading-normal opacity-70'>{data.doller}</p>
                                                <div className='flex items-center '>
                                                    <img src={data.heart} alt="heart" />
                                                    <h2 className='text-xxsm text-black opacity-70 font-Josefin font-normal leading-normal ps-1 pt-[2px]'> {data.number}</h2>
                                                </div>
                                            </div>
                                            <div className='mt-4 text-center'>
                                                <button className='bg-transparent border-[1px] border-solid text-[#707070] border- [#707070] font-Josefin rounded-3xl h-[30px] w-[125px] pt-[3px] text-sm md:text-xmd  hover:bg-black hover:text-white   transition-all ease-in-out duration-200  hover:border-black  shadow-black' >
                                                    {data.buynow}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            }
                        </div></p>}
                        {activeTab === 3 && <p>  <div className='flex flex-wrap justify-center'data-aos="zoom-in">
                            {MapCardTabsdata.map((data) => {
                                return (
                                    <div key={data.id} className='flex items-center justify-center w-[266px] mb-6' >
                                        <div className='p-4 border-[1px] border-solid rounded-3xl border-[#F2F2F2] mx-3 shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] bg-white' >
                                            <div>
                                                <h2 className='font-Josefin text-black text-xmd font-medium leading-normal'>{data.rank}</h2>
                                            </div>
                                            <div className=' flex items-center justify-center pt-[10px] mb-5'>
                                                <img className='w-full rounded-3xl' src={data.img} alt="img" />
                                            </div>
                                            <h2 className='text-black font-Josefin text-md font-semibold leading-normal '>{data.heading}</h2>
                                            <div className='flex justify-between mt-2'>
                                                <p className='text-black font-Josefin text-xsm font-semibold leading-normal opacity-70'>{data.doller}</p>
                                                <div className='flex items-center '>
                                                    <img src={data.heart} alt="heart" />
                                                    <h2 className='text-xxsm text-black opacity-70 font-Josefin font-normal leading-normal ps-1 pt-[2px]'> {data.number}</h2>
                                                </div>
                                            </div>
                                            <div className='mt-4 text-center'>
                                                <button className='bg-transparent border-[1px] border-solid text-[#707070] border- [#707070] font-Josefin rounded-3xl h-[30px] w-[125px] pt-[3px] text-sm md:text-xmd  hover:bg-black hover:text-white   transition-all ease-in-out duration-200  hover:border-black  shadow-black' >
                                                    {data.buynow}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            }
                        </div></p>}
                        {activeTab === 4 && <p>  <div className='flex flex-wrap flex-row-reverse justify-center'data-aos="zoom-in">
                            {MapCardTabsdata.map((data) => {
                                return (
                                    <div key={data.id} className='flex items-center justify-center w-[266px] mb-6' >
                                        <div className='p-4 border-[1px] border-solid rounded-3xl border-[#F2F2F2] mx-3 shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] bg-white' >
                                            <div>
                                                <h2 className='font-Josefin text-black text-xmd font-medium leading-normal'>{data.rank}</h2>
                                            </div>
                                            <div className=' flex items-center justify-center pt-[10px] mb-5'>
                                                <img className='w-full rounded-3xl' src={data.img} alt="img" />
                                            </div>
                                            <h2 className='text-black font-Josefin text-md font-semibold leading-normal '>{data.heading}</h2>
                                            <div className='flex justify-between mt-2'>
                                                <p className='text-black font-Josefin text-xsm font-semibold leading-normal opacity-70'>{data.doller}</p>
                                                <div className='flex items-center '>
                                                    <img src={data.heart} alt="heart" />
                                                    <h2 className='text-xxsm text-black opacity-70 font-Josefin font-normal leading-normal ps-1 pt-[2px]'> {data.number}</h2>
                                                </div>
                                            </div>
                                            <div className='mt-4 text-center'>
                                                <button className='bg-transparent border-[1px] border-solid text-[#707070] border- [#707070] font-Josefin rounded-3xl h-[30px] w-[125px] pt-[3px] text-sm md:text-xmd  hover:bg-black hover:text-white   transition-all ease-in-out duration-200  hover:border-black  shadow-black' >
                                                    {data.buynow}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            }
                        </div></p>}
                        {activeTab === 5 && <p>  <div className='flex flex-wrap justify-center'data-aos="zoom-in">
                            {MapCardTabsdata.map((data) => {
                                return (
                                    <div key={data.id} className='flex items-center justify-center w-[266px] mb-6' >
                                        <div className='p-4 border-[1px] border-solid rounded-3xl border-[#F2F2F2] mx-3 shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] bg-white' >
                                            <div>
                                                <h2 className='font-Josefin text-black text-xmd font-medium leading-normal'>{data.rank}</h2>
                                            </div>
                                            <div className=' flex items-center justify-center pt-[10px] mb-5'>
                                                <img className='w-full rounded-3xl' src={data.img} alt="img" />
                                            </div>
                                            <h2 className='text-black font-Josefin text-md font-semibold leading-normal '>{data.heading}</h2>
                                            <div className='flex justify-between mt-2'>
                                                <p className='text-black font-Josefin text-xsm font-semibold leading-normal opacity-70'>{data.doller}</p>
                                                <div className='flex items-center '>
                                                    <img src={data.heart} alt="heart" />
                                                    <h2 className='text-xxsm text-black opacity-70 font-Josefin font-normal leading-normal ps-1 pt-[2px]'> {data.number}</h2>
                                                </div>
                                            </div>
                                            <div className='mt-4 text-center'>
                                                <button className='bg-transparent border-[1px] border-solid text-[#707070] border- [#707070] font-Josefin rounded-3xl h-[30px] w-[125px] pt-[3px] text-sm md:text-xmd  hover:bg-black hover:text-white   transition-all ease-in-out duration-200  hover:border-black  shadow-black' >
                                                    {data.buynow}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            }
                        </div></p>}
                    </div>
                </div>
                <div className='text-center mt-3'data-aos="fade-down">
                    <button className='bg-black pt-1  text-white font-Josefin border-[#707070] rounded-3xl h-[36px] w-[137px] text-xmd hover:bg-white hover:text-black  border-[1px] transition-all ease-in-out duration-200 border-transparent border-solid hover:border-black' >
                        View more
                    </button>
                </div>
            </div>
        </div>
    );
};


export default CategoryNavTabs