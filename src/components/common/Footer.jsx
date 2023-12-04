import React, { useEffect, useState } from 'react'
import { DiscordIcon, InstagramIcon, TelegramIcon, TwitterIcon } from './Icon'
import { Input } from 'postcss';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the current year when the component mounts
        setCurrentYear(new Date().getFullYear());
    }, []);
    return (
        <div className='rounded-t-3xl bg-black '>
            <div className='container xl:w-[1140px] px-3 sm:px-5 xl:px-0 mx-auto '>
                <div className='flex pt-7 sm:pt-10 md:pt-12 flex-col sm:justify-between justify-center lg:flex-row' >
                    <div className='flex sm:justify-between flex-col sm:flex-row justify-center'>
                        <div className='bg-[#D9D9D9] w-[134px] h-[134px] rounded-full mt-3 mx-auto mb-4 sm:mb-0'></div>
                        <div className='mx-auto lg:hidden' >
                            <h3 className='text-white text-md font-bold font-Josefin leading-normal mb-5 sm:mb-7 sm:text-center'>Get the latest Rarible updates</h3>
                            <div className='flex sm:flex-row  items-center max-w-[432px] flex-col lg:justify-center'>
                                <input type="text" className='w-[250px] h-[35px] placeholder:text-sm md:placeholder:text-xmd placeholder:leading-normal  ps-7 lg:py-  placeholder:text-[#979898]  placeholder:font-medium outline-none bg-[#3F3F46] rounded-3xl sm:rounded-s-3xl sm:rounded-e-none text-white ' placeholder="Email address" />
                                <div className='text-center mt-2 sm:mt-0'>
                                    <button className='bg-white h-[35px] w-[185px] pt-2 px-11 rounded-3xl sm:rounded-e-3xl font-Josefin text-xsm sm:text-sm md:text-xmd font-semibold leading-normal sm:rounded-s-none'> SUBSCRIBE</button>
                                </div>
                            </div>
                            <div className='flex items-center justify-center lg:justify-center sm:justify-center gap-4 mt-6 sm:mt-9'>
                                < TwitterIcon />
                                <DiscordIcon />
                                <InstagramIcon />
                                <TelegramIcon />
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto hidden lg:block' >
                            <h3 className='text-white text-md font-bold font-Josefin leading-normal mb-5 sm:mb-7 lg:text-center'>Get the latest Rarible updates</h3>
                            <div className='flex sm:flex-row  items-center max-w-[432px] flex-col'>
                                <input type="text" className='placeholder:text-sm md:placeholder:text-xmd placeholder:leading-normal  ps-7 py-3 sm:py-1 placeholder:text-[#979898]  placeholder:font-medium outline-none bg-[#3F3F46] rounded-3xl sm:rounded-s-3xl sm:rounded-e-none text-white h-[35px]' placeholder="Email address" />
                                <div className='text-center mt-2 sm:mt-0'>
                                    <button className='bg-white pt-2 px-11 rounded-3xl sm:rounded-e-3xl font-Josefin text-xsm sm:text-sm md:text-xmd font-semibold leading-normal sm:rounded-s-none'> SUBSCRIBE</button>
                                </div>
                            </div>
                            <div className='flex items-center justify-center sm:justify-start lg:justify-center gap-4 mt-6 sm:mt-9'>
                                < TwitterIcon />
                                <DiscordIcon />
                                <InstagramIcon />
                                <TelegramIcon />
                            </div>
                        </div>
                    <ul className=' mt-5 sm:mt-8 flex gap-5  justify-center lg:flex-col lg:justify-start'>
                        <li><Link className='text-white font-Josefin text-xxsm sm:text-sm font-medium leading-normal inline-block opacity-60'>My Profile</Link></li>
                        <li><Link className='text-white font-Josefin text-xxsm sm:text-sm font-medium leading-normal inline-block opacity-60 '>Explore</Link></li>
                        <li><Link className='text-white font-Josefin text-xxsm sm:text-sm font-medium leading-normal inline-block opacity-60 '>News</Link></li>
                        <li><Link className='text-white font-Josefin text-xxsm sm:text-sm font-medium leading-normal inline-block opacity-60 '>Activity</Link></li>
                    </ul>
                </div>
                <p className='mt-7 sm:mt-9 md:mt-11 text-center text-white opacity-50 font-Josefin text-xxsm font-normal leading-normal pb-2' >© Copyright <span id="copyright">{currentYear}</span> Destroyers of Fiat . All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer