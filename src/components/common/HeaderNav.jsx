import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { SearchIcon } from './Icon';
const HeaderNav = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow_hidden');
    } else {
        document.body.classList.add('overflow_hidden')
    }
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className='bg-white'>
                <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
                    <div className='container xl:w-[1140px]  px-3 sm:px-5 xl:px-0 mx-auto'>
                        <nav className='flex justify-between items-center py-1'>
                            <ul className='cursor-pointer flex items-center justify-between w-full lg:w-fit '>
                                <li>
                                    <div className='bg-[#D9D9D9] w-[60px] h-[60px] md:w-[75px] md:h-[75px] lg:w-[90px] lg:h-[90px] rounded-full '></div>
                                </li>
                                <li className='me-6 relative hidden sm:block lg:hidden'>
                                    <input type="text" className='bg-transparent ps-9 font-Manrope placeholder:font-Manrope h-[36px] border-[#B3B3B3] border-solid border-[1.5px] w-[185px] py-4 px-2 rounded-full text-[#979898] op font-bold placeholder:text-xsm md:placeholder:text-sm leading-normal  placeholder:text-[#979898]  placeholder:font-bold placeholder:leading-normal  outline-none' placeholder='Search...' />
                                    <div className='absolute top-[10px] start-3'>
                                        <SearchIcon />
                                    </div>
                                    <Link to="/" onClick={() => setShowNavbar(true)} className='bg-black pt-[7px] pb-[2px] px-[26px] font-Josefin rounded-[50px] text-white font-semibold sm:text-sm  md:text-xmd break-words leading-normal inline-block ms-6   hover:bg-white hover:text-black border-[2px] transition-all ease-in-out duration-200 border-transparent border-solid hover:border-black  '>SIGN IN</Link>
                                </li>
                            </ul>
                            <ul className={`${showNavbar ? 'flex items-center mb-0 nav_sm p-0' : 'flex items-center mb-0 nav_sm nav_show p-0'} `}>
                                <li className='me-[60px] hidden lg:block relative'>
                                    <input type="text" className='bg-transparent ps-9 font-Manrope placeholder:font-Manrope h-[36px] border-[#B3B3B3] border-solid border-[1.5px] w-[185px] py-4 px-2 rounded-full text-[#979898]text-[#979898] font-bold placeholder:text-xsm md:placeholder:text-sm leading-normal  placeholder:text-[#979898]  placeholder:font-medium placeholder:leading-normal  outline-none' placeholder='Search...' />
                                    <div className='absolute top-[10px] start-3'>
                                        <SearchIcon />
                                    </div>
                                </li>
                                <li><Link onClick={() => setShowNavbar(true)} className='font-Inter lg:me-7 mb-10 lg:mb-0  text-black font-Open text-[5vw] sm:text-[3vw] md:text-[3vw] lg:text-sm font-medium inline-block  relative after:content-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-black after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%] leading-normal  break-words  opacity-[0.6] hover:opacity-100' to="/Profile">My Profile</Link></li>
                                <li><Link onClick={() => setShowNavbar(true)} className='font-Inter lg:me-7 mb-10 lg:mb-0 font-Open text-black text-[5vw] sm:text-[3vw] md:text-[3vw] lg:text-sm  font-medium inline-block  relative after:content-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-black after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%]  break-words  leading-normal opacity-[0.6] hover:opacity-100 ' to="/Explore">Explore</Link></li>
                                <li><Link onClick={() => setShowNavbar(true)} className='font-Inter lg:me-7 mb-12 lg:mb-0 font-Open text-black text-[5vw] sm:text-[3vw] md:text-[3vw] lg:text-sm  font-medium inline-block  relative after:content-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-black after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%]  break-words  leading-normal opacity-[0.6] hover:opacity-100 ' to="/News">News</Link></li>
                                <li><Link onClick={() => setShowNavbar(true)} className='lg:me-[60px] font-Inter mb-12 lg:mb-0 font-Open text-black text-[5vw] sm:text-[3vw] md:text-[3vw] lg:text-sm  font-medium inline-block  relative after:content-[""] after:w-0 after:h-[2px] after:transition-all transition-all  after:ease-in-out ease-in-out after:duration-300 duration-300 after:bg-black after:absolute after:bottom-[-3px] hover:after:w-full hover:after:left-0 after:left-[50%]  break-words  leading-normal opacity-[0.6] hover:opacity-100 ' to="/Activity">Activity</Link></li>
                                <li className='sm:hidden lg:block'><Link to="/" onClick={() => setShowNavbar(true)} className='bg-black pt-[7px] pb-[2px]  px-[26px] rounded-[50px] text-white font-semibold text-xmd break-words leading-normal hover:bg-white hover:text-black  border-[1px] transition-all ease-in-out duration-200 border-transparent border-solid hover:border-black    font-Josefin inline-block '>SIGN IN</Link></li>
                                <span title="close" className="ms-4 close_nav text-black fw-bold lg:hidden" onClick={() => setShowNavbar(true)} ><RxCross2 fontSize={40} color='black' /></span>
                            </ul>
                            <span title="open"
                                className="inline-block lg:hidden fw-bold text-black"
                                onClick={() => setShowNavbar(false)}>
                                <RxHamburgerMenu fontSize={40} color='black' /></span>
                        </nav>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default HeaderNav
