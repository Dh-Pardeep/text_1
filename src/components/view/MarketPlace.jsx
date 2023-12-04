import React from "react";
import Slider from "react-slick";
import Boat_img from '../../assets/img/webp/Boat_img.webp'
import R_img from '../../assets/img/webp/R_yellow_img.webp'
import Superrare from '../../assets/img/webp/superrare.webp'
import ThreeSignImg from '../../assets/img/webp/sign_three_type.webp'
import { SliderLeftIcon, SliderRightIcon } from "../common/Icon";
const MarketPlace = () => {
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
                    slidesToShow: 3.5,
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
        <>
            <div className='container xl:w-[1140px] px-3 sm:px-5 xl:px-0 mx-auto '>
                <h2 className='text-black font-bold text-[32px] md:text-[42px] lg:text-xl break-words font-Josefin mt-12  sm:mt-16 md:mt-20 lg:mt-[86px] 'data-aos="fade-down">Top NFT Market places</h2>
                <div className="my-10 relative" data-aos="fade-up">
                    <Slider ref={slider} {...settings} >
                        <div className="w-1/4  px-6 py-3">
                            <div className=" min-h-[200px]  h-full max-h-[250px] border-[1px] border-solid border-[#D5D5D5] shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] flex items-center justify-center rounded-3xl">
                                <img src={Boat_img} alt="Boat_img" />
                            </div>
                        </div>
                        <div className="w-1/4  px-6 py-3">
                            <div className=" min-h-[200px]  h-full max-h-[250px] border-[1px] border-solid border-[#D5D5D5] shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] flex items-center justify-center rounded-3xl">
                                <img src={R_img} alt="Boat_img" />
                            </div>
                        </div>
                        <div className="w-1/4  px-6 py-3">
                            <div className=" min-h-[200px]  h-full max-h-[250px] border-[1px] border-solid border-[#D5D5D5] shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] flex items-center justify-center rounded-3xl px-3">
                                <img src={Superrare} alt="superrare" />
                            </div>
                        </div>
                        <div className="w-1/4  px-6 py-3">
                            <div className=" min-h-[200px]  h-full max-h-[250px] border-[1px] border-solid border-[#D5D5D5] shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] flex items-center justify-center rounded-3xl">
                                <img src={ThreeSignImg} alt="ThreeSignImg" />
                            </div>
                        </div>
                        <div className="w-1/4  px-6 py-3">
                            <div className=" min-h-[200px]  h-full max-h-[250px] border-[1px] border-solid border-[#D5D5D5] shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] flex items-center justify-center rounded-3xl">
                                <img src={Boat_img} alt="Boat_img" />
                            </div>
                        </div>
                        <div className="w-1/4  px-6 py-3">
                            <div className=" min-h-[200px]  h-full max-h-[250px] border-[1px] border-solid border-[#D5D5D5] shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] flex items-center justify-center rounded-3xl">
                                <img src={R_img} alt="Boat_img" />
                            </div>
                        </div>
                        <div className="w-1/4  px-6 py-3">
                            <div className=" min-h-[200px]  h-full max-h-[250px] border-[1px] border-solid border-[#D5D5D5] shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] flex items-center justify-center rounded-3xl px-3">
                                <img src={Superrare} alt="superrare" />
                            </div>
                        </div>
                        <div className="w-1/4  px-6 py-3">
                            <div className=" min-h-[200px]  h-full max-h-[250px] border-[1px] border-solid border-[#D5D5D5] shadow-[0px_4px_4px_0px] shadow-[#C8C8C8] flex items-center justify-center rounded-3xl">
                                <img src={ThreeSignImg} alt="ThreeSignImg" />
                            </div>
                        </div>
                    </Slider>
                    <button className="absolute top-2/4 -left-1 -translate-y-2/4" onClick={() => slider?.current?.slickPrev()}><SliderLeftIcon /></button>
                    <button className="absolute top-2/4 -right-1 -translate-y-2/4" onClick={() => slider?.current?.slickNext()}><SliderRightIcon /></button>
                </div>
            </div>
        </>
    )
}

export default MarketPlace