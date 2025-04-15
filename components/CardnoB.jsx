import React from 'react';
import Ellipse from "../assets/images/Ellipse.png"
import Subtract from "../assets/images/Subtract.png"

export const CardnoB = ({cardImg,name,username,priceImg,SoldImg}) => {
  
    return (
    <>
    <div className='relative min-w-[308px] max-w-[308px]'>
            <img src={Subtract} alt="" />
            <div className='flex absolute lg:bottom-[195px] sm:bottom-[315px] sm:left-[25px] z-[1] lg:left-[25px]'>
                <div>
                    <img src={Ellipse} alt="" />
                </div>
                <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                    <h1>{name}</h1>
                    <p>@{username}</p>
                </div>
            </div>
            <div className='absolute top-[98px] left-[18px] sm:top-[90px] sm:left-[13px]'>
                <img src={cardImg} className='w-[272px] rounded-[14px]' alt="" />
            </div>
            <div className='absolute top-[211px] left-[108px] 2xl:top-[207px] 2xl:left-[103px]'>
                        <img src={SoldImg} className='' alt="" />
                    </div>
            <div className='absolute z-[1] lg:bottom-[30px] lg:left-[160px] sm:bottom-[28px] sm:left-[145px] '>
                <img src={priceImg} alt="" />
            </div>
            <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[43px] left-[30px] 2xl:bottom-[40px] 2xl:left-[35px]'>BUY</button>
        </div>
    </>
  )
}
export default CardnoB;
