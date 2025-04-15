import React from 'react'
import Subtract from "../assets/images/Subtract.png"
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
import Sold from "../assets/images/Sold.png"
import CardnoB from '../components/CardnoB'


export const Recently_sold = () => {
    const cardss = [
        { cardImg: Card5_pic, name: "Stella Nova", username: "Stella Nova", priceImg: Price, SoldImg: Sold },
        { cardImg: Card6_pic, name: "Stella Nova", username: "Stella Nova", priceImg: Price, SoldImg: Sold },
        { cardImg: Card7_pic, name: "Stella Nova", username: "Stella Nova", priceImg: Price, SoldImg: Sold },
        { cardImg: Card8_pic, name: "Stella Nova", username: "Stella Nova", priceImg: Price, SoldImg: Sold },
        { cardImg: Card9_pic, name: "Stella Nova", username: "Stella Nova", priceImg: Price, SoldImg: Sold },
        { cardImg: Card10_pic, name: "Stella Nova", username: "Stella Nova", priceImg: Price, SoldImg: Sold },
        { cardImg: Card11_pic, name: "Stella Nova", username: "Stella Nova", priceImg: Price, SoldImg: Sold },
        { cardImg: Card12_pic, name: "Stella Nova", username: "Stella Nova", priceImg: Price, SoldImg: Sold },

    ]
    return (
        <>
            <div>
                <h1 className='text-[64px]  lg:ml-[194px] lg:mt-[100px] sm:ml-[104px] sm:mt-[100px] '>RECENTLY SOLD</h1>
            </div>

            <div className='flex flex-wrap max-w-[1318px] mx-auto justify-around'>
            {cardss.map((card, index) => (
                    <CardnoB
                        key={index}
                        cardImg={card.cardImg}
                        SoldImg={card.SoldImg}
                        name={card.name}
                        username={card.username}
                        priceImg={card.priceImg}
                    />
                ))}
            </div>
        </>
    )
}
export default Recently_sold;
