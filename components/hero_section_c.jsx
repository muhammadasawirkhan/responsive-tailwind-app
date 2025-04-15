import React from 'react'
import Subtract from "../assets/images/Subtract.png"
import Card1pic from "../assets/images/Card1pic.png"
import Ellipse from "../assets/images/Ellipse.png"
import Price from "../assets/images/Price.png"
import Card5_pic from "../assets/images/Card5_pic.png"
import Card6_pic from "../assets/images/Card6_pic.png"
import Card7_pic from "../assets/images/Card7_pic.png"
import Card8_pic from "../assets/images/Card8_pic.png"
import Card9_pic from "../assets/images/Card9_pic.png"
import Card10_pic from "../assets/images/Card10_pic.png"
import Card11_pic from "../assets/images/Card11_pic.png"
import Card12_pic from "../assets/images/Card12_pic.png"
import CardNoA from '../components/CardNoA'


export const Hero_section_c = () => {
    const cards = [
        { cardImg: Card5_pic, name: "Stella Nova", username: "StellaNova", priceImg: Price },
        { cardImg: Card6_pic, name: "Stella Nova", username: "StellaNova", priceImg: Price },
        { cardImg: Card7_pic, name: "Stella Nova", username: "StellaNova", priceImg: Price },
        { cardImg: Card8_pic, name: "Stella Nova", username: "StellaNova", priceImg: Price },
        { cardImg: Card9_pic, name: "Stella Nova", username: "StellaNova", priceImg: Price },
        { cardImg: Card10_pic, name: "Stella Nova", username: "StellaNova", priceImg: Price },
        { cardImg: Card11_pic, name: "Stella Nova", username: "StellaNova", priceImg: Price },
        { cardImg: Card12_pic, name: "Stella Nova", username: "StellaNova", priceImg: Price },
    ];
    return (
        <>
            <div className="relative max-w-[1318px]  mx-auto">

                <div className="absolute inset-0 bg-[#fd0000] -translate-x-[50px] blur-[500px] z-[-2]"></div>
                <div className='flex justify-between items-center px-[20px] mt-[100px] '>
                    <div className=' '>
                        <h1 className='font-roboto text-4xl'>Trending NFT'S</h1>
                    </div>
                    <div className=''>
                        <button className=' w-[213] h-[50px] bg-[#fff] border-2 border-[#FE0101] rounded pl-[16px] pt-[10px] pr-[16px] pb-[10px] mt-[35px] text-[#FE0101]'><a href="">Last 30 Minutes</a></button>
                    </div>
                </div>
            </div>

            

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
    )
}
export default Hero_section_c;
