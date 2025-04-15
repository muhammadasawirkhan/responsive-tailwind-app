import React from 'react';
import Left from "../assets/images/Left.png";
import Right from "../assets/images/Right.png";
import Card6_pic from "../assets/images/Card6_pic.png"
import Card12_pic from "../assets/images/Card12_pic.png"
import Card10_pic from "../assets/images/Card10_pic.png"
import Subtract from "../assets/images/Subtract.png"
import Ellipse from "../assets/images/Ellipse.png"
import Price from "../assets/images/Price.png"

export const Hero_section = () => {
    return (
        <>
            <div className=''>

                <div className='text-center mt-[150px]'>
                    <h1 className='text-6xl'>DISCOVER, CREATE &<br /> SELL ARTWORKS.</h1>
                </div>
                <div className='text-center mt-[20px]'>
                    <p className='font-roboto'>Discover and trade unique digital art pieces on our NFT website,<br /> where creativity meets blockchain technology.</p>
                </div>
                <div className='flex justify-between  top-[150px] relative '>
                    <img src={Right} className='absolute right-0 top-20' alt="" />
                    <img src={Left} className='absolute left-0 top-20' alt="" />



                    {/*carda*/}


                    <div className='relative  bottom-[130px] min-w-[227px] max-w-[227px] left-[355px]  z-[-1] skew-y-[3deg]    '>

                        <img src={Subtract} alt="" />
                        <div className='flex absolute top-6  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[83px] left-[21px]'>
                            <img src={Card6_pic} className='w-[182px] ' alt="" />
                        </div>
                        <div className="absolute  bottom-28 left-3  w-[12vw]">

                            <div className="w-full flex gap-0 justify-around">
                                <button className='w-[46px] text-[#fff] h-[36px] rounded  bg-gradient-to-r from-[#FD0000] to-[#FF9292]  a'>BUY</button>
                                <img src={Price} alt="" />
                            </div>



                        </div>
                    </div>

                    {/*carda*/}


                    <div className='relative bottom-[120px] min-w-[267px] max-w-[267px] left-[165px] z-[-1] skew-y-[3deg] '>
                        <img src={Subtract} alt="" />
                        <div className='flex absolute top-8  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[88px] left-[16px]'>
                            <img src={Card6_pic} className='w-[219px] ' alt="" />
                        </div>
                        <div className="absolute  bottom-17 left-3  ">

                            <div className="w-[14vw] flex gap-0 justify-around">
                                <button className='w-[56px] text-[#fff] h-[36px] rounded  bg-gradient-to-r from-[#FD0000] to-[#FF9292]  a'>BUY</button>
                                <img src={Price} alt="" />
                            </div>



                        </div>
                    </div>
                    {/*cardb*/}
                    <div className='relative bottom-[120px] right-[20px] max-w-[308px] min-w-[308px]'>
                        <img src={Subtract} alt="" />
                        <div className='flex absolute top-8  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[90px] left-[21px]'>
                            <img src={Card12_pic} className='w-[260px] ' alt="" />
                        </div>
                        <div className="absolute  bottom-8  w-full">

                            <div className="w-full flex justify-around">
                                <button className='w-[56px] text-[#fff] h-[36px] rounded  bg-gradient-to-r from-[#FD0000] to-[#FF9292]  a'>BUY</button>
                                <img src={Price} alt="" />
                            </div>



                        </div>
                    </div>
                    {/*cardc*/}
                    <div className='relative bottom-[120px] right-[185px] z-[-1] skew-y-[-3deg] min-w-[267px] max-w-[267px]' >
                        <img src={Subtract} alt="" />
                        <div className='flex absolute top-8  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[88px] left-[16px] '>
                            <img src={Card10_pic} className='w-[219px]  ' alt="" />
                        </div>
                        <div className="absolute  bottom-17 left-3">

                            <div className="w-[14vw] flex gap-0 justify-around">
                                <button className='w-[56px] text-[#fff] h-[36px] rounded  bg-gradient-to-r from-[#FD0000] to-[#FF9292]  a'>BUY</button>
                                <img src={Price} alt="" />
                            </div>



                        </div>
                    </div>
                    {/*cardc*/}
                    <div className='relative right-[370px] bottom-[120px] z-[-2] skew-y-[-3deg] min-w-[227px] max-w-[227px]' >
                        <img src={Subtract} alt="" />
                        <div className='flex absolute top-8  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[83px] left-[21px] '>
                            <img src={Card10_pic} className='w-[182px]  ' alt="" />
                        </div>
                        <div className="absolute  bottom-28 left-3  w-[12vw]">

                            <div className="w-full flex justify-around">
                                <button className='w-[56px] text-[#fff] h-[36px] rounded  bg-gradient-to-r from-[#FD0000] to-[#FF9292]  a'>BUY</button>
                                <img src={Price} alt="" />
                            </div>



                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
export default Hero_section;
