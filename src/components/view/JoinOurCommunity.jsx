import React from 'react'
import { DiscordIcon, InstagramIcon, TelegramIcon, TwitterIcon } from '../common/Icon'

const JoinOurCommunity = () => {
    return (
        <div>
            <div className='container xl:w-[1140px] px-3 sm:px-5 xl:px-0 mx-auto my-12  sm:my-16 md:my-20 lg:my-24'>
                <div className='join_our_bg_img bg-no-repeat bg-cover bg-center rounded-3xl'>
                    <div className='flex p-8 lg:p-14 items-center flex-col sm:flex-row'>
                        <div className='bg-[#D9D9D9] w-[160px] sm:w-[185px] md:w-[170px] lg:w-[206px] max-w-[193px] h-[160px] lg:h-[193px] rounded-full  '></div>
                        <div className='w-full sm:w-3/4 sm:ms-7 lg:ms-16' >
                            <h2 className='text-white font-Josefin font-bold text-[36px] md:text-[42px] lg:text-xl leading-normal'>Join our community</h2>
                            <p className='text-white font-Josefin font-semibold text-xsm md:text-sm leading-[120%] opacity-70 pt-3 lg:pt-4 pb-5 lg:pb-9 max-w-[770px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className='flex items-center gap-4'>
                                < TwitterIcon />
                                <DiscordIcon />
                                <InstagramIcon />
                                <TelegramIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinOurCommunity