import React from 'react'
import { Link } from 'react-router-dom'
import Hero_image from '../../assets/img/webp/hero_section_img.webp'
const Hero = () => {
    return (
        <div className='relative her_bg_image mx-5 rounded-3xl bg-no-repeat bg-center bg-cover'>
            <div className='container xl:w-[1140px]  px-3 sm:px-5 xl:px-0 mx-auto relative z-10'>
                <h1 className='break-words font-semibold font-Playfair text-[44px] md:text-[50px] lg:text-xxl  text-white text-center leading-normal pt-7'>"Best New NFT to look out for"</h1>
                <p className='text-xsm md:text-sm  font-semibold font-Josefin leading-5 break-words text-[#B2B7B8] max-w-[652px] text-center mx-auto'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='bg-[#D9D9D9] w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] rounded-full mx-auto my-6 md:my-9'></div>
                <div className='text-center pb-7 md:pb-9'>
                <Link to="/" onClick={() => setShowNavbar(true)} className='bg-transparent pt-[8px] pb-[3px] px-[17px] rounded-[50px] text-[#8F9697] font-semibold sm:text-sm border-[1px] border-solid border-white  md:text-xmd break-words leading-normal inline-block font-Josefin'>JOIN US</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero