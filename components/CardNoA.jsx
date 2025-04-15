import React from 'react';
import Subtract from "../assets/images/Subtract.png";
import Ellipse from "../assets/images/Ellipse.png";

const CardNoA = ({ cardImg, name, username, priceImg }) => {
    return (
        <div className='relative min-w-[308px] max-w-[308px]'>
            <img src={Subtract} alt="" />
            <div className='flex absolute bottom-[195px] z-[1] left-[25px]'>
                <div>
                    <img src={Ellipse} alt="" />
                </div>
                <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                    <h1>{name}</h1>
                    <p>@{username}</p>
                </div>
            </div>
            <div className='absolute top-[98px] left-[18px] 2xl:top-[90px] 2xl:left-[13px]'>
                <img src={cardImg} className='w-[272px] rounded-[14px]' alt="" />
            </div>
            <div className='absolute z-[1] bottom-[30px] left-[160px] 2xl:bottom-[28px] 2xl:left-[145px] '>
                <img src={priceImg} alt="" />
            </div>
            <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[43px] left-[30px] 2xl:bottom-[40px] 2xl:left-[35px]'>BUY</button>
        </div>
    );
};

export default CardNoA;
