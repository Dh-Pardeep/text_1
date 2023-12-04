import React from 'react'
import Slider from 'react-slick';
import { SliderLeftIcon, SliderRightIcon } from '../common/Icon';
import CommentsOne from '../../assets/img/webp/Comments1.webp'
import CommentTwo from '../../assets/img/webp/Comments2.webp'
import CommentThree from '../../assets/img/webp/Comments3.webp'
import CommentFour from '../../assets/img/webp/Comments4.webp'
const Comments = () => {
    const slider = React.useRef(null);
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div>
            <div className='container xl:w-[1140px] px-3 sm:px-5 xl:px-0 mx-auto '>
                <h2 className='text-black font-bold text-[32px] md:text-[42px] lg:text-xl break-words font-Josefin mb-12  sm:mt-16 md:mt-20 lg:mt-[86px] '>Top NFT Market places</h2>
                <div className='relative py-4 px-2 mb-12 sm:mb-16 md:mb-20 lg:mb-24'>
                    <Slider ref={slider} {...settings}>
                        <div className='w-3/4!impoertant  sm:w-1/3 px-3'>
                            <div className='rounded-3xl px-4 py-4 border-[1px] border-solid border-[#F5F5F5] bg-white'>
                                <img className='rounded-3xl  border-[1px] border-solid border-[#F5F5F5] w-full' src={CommentsOne} alt="LatestNews" />
                                <p className='text-black opacity-50 font-Josefin font-semibold text-xxsm leading-[120%] mt-1'>1 year ago . 2 comments</p>
                                <p className='text-black opacity-70 font-Josefin text-xxsm font-semibold leading-[120%] mt-3 max-w-[324px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                            </div>
                        </div>
                        <div className='w-3/4!impoertant  sm:w-1/3 px-3'>
                            <div className='rounded-3xl px-4 py-4 border-[1px] border-solid border-[#F5F5F5] bg-white'>
                                <img className='rounded-3xl  border-[1px] border-solid border-[#F5F5F5] w-full' src={CommentTwo} alt="LatestNews" />
                                <p className='text-black opacity-50 font-Josefin font-semibold text-xxsm leading-[120%] mt-1'>1 year ago . 2 comments</p>
                                <p className='text-black opacity-70 font-Josefin text-xxsm font-semibold leading-[120%] mt-3 max-w-[324px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                            </div>
                        </div>
                        <div className='w-3/4!impoertant  sm:w-1/3 px-3'>
                            <div className='rounded-3xl px-4 py-4 border-[1px] border-solid border-[#F5F5F5] bg-white'>
                                <img className='rounded-3xl  border-[1px] border-solid border-[#F5F5F5] w-full' src={CommentThree} alt="LatestNews" />
                                <p className='text-black opacity-50 font-Josefin font-semibold text-xxsm leading-[120%] mt-1'>1 year ago . 2 comments</p>
                                <p className='text-black opacity-70 font-Josefin text-xxsm font-semibold leading-[120%] mt-3 max-w-[324px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                            </div>
                        </div>
                        <div className='w-3/4!impoertant  sm:w-1/3 px-3'>
                            <div className='rounded-3xl px-4 py-4 border-[1px] border-solid border-[#F5F5F5] bg-white'>
                                <img className='rounded-3xl  border-[1px] border-solid border-[#F5F5F5] w-full' src={CommentFour} alt="LatestNews" />
                                <p className='text-black opacity-50 font-Josefin font-semibold text-xxsm leading-[120%] mt-1'>1 year ago . 2 comments</p>
                                <p className='text-black opacity-70 font-Josefin text-xxsm font-semibold leading-[120%] mt-3 max-w-[324px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                            </div>
                        </div>
                        <div className='w-3/4!impoertant  sm:w-1/3 px-3'>
                            <div className='rounded-3xl px-4 py-4 border-[1px] border-solid border-[#F5F5F5] bg-white'>
                                <img className='rounded-3xl  border-[1px] border-solid border-[#F5F5F5] w-full' src={CommentsOne} alt="LatestNews" />
                                <p className='text-black opacity-50 font-Josefin font-semibold text-xxsm leading-[120%] mt-1'>1 year ago . 2 comments</p>
                                <p className='text-black opacity-70 font-Josefin text-xxsm font-semibold leading-[120%] mt-3 max-w-[324px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                            </div>
                        </div>
                        <div className='w-3/4!impoertant  sm:w-1/3 px-3'>
                            <div className='rounded-3xl px-4 py-4 border-[1px] border-solid border-[#F5F5F5] bg-white'>
                                <img className='rounded-3xl  border-[1px] border-solid border-[#F5F5F5] w-full' src={CommentTwo} alt="LatestNews" />
                                <p className='text-black opacity-50 font-Josefin font-semibold text-xxsm leading-[120%] mt-1'>1 year ago . 2 comments</p>
                                <p className='text-black opacity-70 font-Josefin text-xxsm font-semibold leading-[120%] mt-3 max-w-[324px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                            </div>
                        </div>
                        <div className='w-3/4!impoertant  sm:w-1/3 px-3'>
                            <div className='rounded-3xl px-4 py-4 border-[1px] border-solid border-[#F5F5F5] bg-white'>
                                <img className='rounded-3xl  border-[1px] border-solid border-[#F5F5F5] w-full' src={CommentThree} alt="LatestNews" />
                                <p className='text-black opacity-50 font-Josefin font-semibold text-xxsm leading-[120%] mt-1'>1 year ago . 2 comments</p>
                                <p className='text-black opacity-70 font-Josefin text-xxsm font-semibold leading-[120%] mt-3 max-w-[324px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                            </div>
                        </div>
                        <div className='w-3/4!impoertant  sm:w-1/3 px-3'>
                            <div className='rounded-3xl px-4 py-4 border-[1px] border-solid border-[#F5F5F5] bg-white'>
                                <img className='rounded-3xl  border-[1px] border-solid border-[#F5F5F5] w-full' src={CommentFour} alt="LatestNews" />
                                <p className='text-black opacity-50 font-Josefin font-semibold text-xxsm leading-[120%] mt-1'>1 year ago . 2 comments</p>
                                <p className='text-black opacity-70 font-Josefin text-xxsm font-semibold leading-[120%] mt-3 max-w-[324px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                            </div>
                        </div>
                    </Slider>
                    <button className="absolute top-2/4 -left-1 md:-left-4 -translate-y-2/4" onClick={() => slider?.current?.slickPrev()}><SliderLeftIcon /></button>
                    <button className="absolute top-2/4 -right-1 md:-right-3 -translate-y-2/4" onClick={() => slider?.current?.slickNext()}><SliderRightIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default Comments