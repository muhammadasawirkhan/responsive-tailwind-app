import React from 'react';
import CardNoA from './CardNoA';

// Image imports
import Card1pic from '../assets/images/Card1pic.png';
import Card2pic from '../assets/images/Card2pic.png';
import Card3pic from '../assets/images/Card3pic.png';
import Card4pic from '../assets/images/Card4pic.png';

import Price from '../assets/images/Price.png';
import Left_arrow from '../assets/images/Left_arrow.png';
import Right_arrow from '../assets/images/Right_arrow.png';


const HeroSectionB = () => {
    // Array of card data
    const cards = [
        { cardImg: Card1pic, name: "Stella Nova", username: "StellaNova", priceImg: Price },
        { cardImg: Card2pic, name: "Luna Lux", username: "LunaLux", priceImg: Price },
        { cardImg: Card3pic, name: "Nova Edge", username: "NovaEdge", priceImg: Price },
        { cardImg: Card4pic, name: "Orion Pulse", username: "OrionPulse", priceImg: Price }
    ];

    return (
        <>
            <div className='flex flex-wrap relative max-w-[1318px] mx-auto'>
                <div className='block'>
                    <div className='ml-[40px] mt-[500px] 2xl:ml-[18px]'>
                        <h1 className='text-4xl'>FEATURED COLLECTION</h1>
                    </div>
                    <div className='ml-[40px] mt-[10px] 2xl:ml-[18px]'>
                        <p className='font-roboto'>
                            Explore our exclusive featured collection, showcasing innovative campaigns and creative <br />
                            storytellings from top brands around the world
                        </p>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className='flex'>
                    <button className='absolute w-[40px] px-[8px] text-[#fff] h-[40px] rounded bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[190px] xl:left-[1140px] rotate-45'>
                        <img src={Left_arrow} alt="" className='-rotate-45' />
                    </button>
                    <button className='absolute w-[40px] px-[8px] text-[#fff] h-[40px] rounded bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[1250px] xl:left-[1200px] rotate-45'>
                        <img src={Right_arrow} alt="" className='-rotate-45' />
                    </button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className='flex flex-wrap gap-2 pt-[40px] max-w-[1318px] mx-auto lg:justify-between justify-around'>
                {cards.map((card, index) => (
                    <CardNoA
                        key={index}
                        cardImg={card.cardImg}
                        name={card.name}
                        username={card.username}
                        priceImg={card.priceImg}
                    />
                ))}
            </div>
        </>
    );
};

export default HeroSectionB;
