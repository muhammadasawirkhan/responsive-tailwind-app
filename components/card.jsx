// components/Card.jsx
import React from 'react';

const Card = ({ image, days, hours, minutes, seconds }) => {
    return (
        <div className='relative min-w-[308px] max-w-[308px] '>
            <img src={require("../assets/images/Subtract.png")} alt="" />
            <div className='flex absolute bottom-[180px] z-[1] left-[25px]'>
                <div className='-mt-[192px]'>
                    <img src={require("../assets/images/Ellipse.png")} alt="" />
                </div>
                <div className='-mt-[192px] ml-[10px]'>
                    <h1>STELLA NOVA</h1>
                    <p>@Stella Nova</p>
                </div>
            </div>
            <div className='absolute top-[89px] left-[15px]'>
                <img src={image} className='w-[272px]' alt="" />
            </div>
            <div className='absolute flex gap-[3px] top-[231px] left-[96px] bg-white/70 shadow-lg py-[10px] px-[4px] rounded-md'>
                <p className='font-roboto'>{days < 10 ? `0${days}` : days}:</p>
                <p className='font-roboto'>{hours < 10 ? `0${hours}` : hours}:</p>
                <p className='font-roboto'>{minutes < 10 ? `0${minutes}` : minutes}:</p>
                <p className='font-roboto'>{seconds < 10 ? `0${seconds}` : seconds}</p>
            </div>
        </div>
    );
};

export default Card;
