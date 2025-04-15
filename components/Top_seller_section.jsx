import React from 'react'
import Picno1 from "../assets/images/Picno1.png"
import Picno2 from "../assets/images/Picno2.png"
import Picno3 from "../assets/images/Picno3.png"
import Picno4 from "../assets/images/Picno4.png"
import Picno5 from "../assets/images/Picno5.png"
import Picno6 from "../assets/images/Picno6.png"
import Picno7 from "../assets/images/Picno7.png"
import Picno8 from "../assets/images/Picno8.png"


export const Top_seller_section = () => {
  return (
    <>
      <div className='flex max-w-[1318px] mx-auto justify-between'>
        <div className='pl-[30px] pt-[50px]'>
          <h1 className='text-4xl'>TOP SELLER</h1>
        </div>
        <div className='pr-[50px] pt-[50px]'>
          <button className='text-[#FE0101] font-semibold'><a href="">View All</a></button>
        </div>
      </div>
      <div className='flex flex-wrap max-w-[1318px]  mx-auto gap-30 pl-[45px] pt-[35px]'>
        <div className='flex'>
          <div>
            <img src={Picno1} alt="" />
          </div>
          <div className='mt-[70px] ml-[10px]'>
            <h1 className='font-roboto font-semibold'>Jacob Jones</h1>
            <p>245.5 FRY</p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src={Picno2} alt="" />
          </div>
          
          <div className='mt-[70px] ml-[10px]'>
            <h1 className='font-roboto font-semibold'>Jacob Jones</h1>
            <p>245.5 FRY</p>
          </div>

        </div>
        <div className='flex'>
          <div>
            <img src={Picno3} alt="" />
          </div>
          <div className='mt-[70px] ml-[10px]'>
            <h1 className='font-roboto font-semibold'>Jacob Jones</h1>
            <p>245.5 FRY</p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src={Picno4} alt="" />
          </div>
          <div className='mt-[70px] ml-[10px]'>
            <h1 className='font-roboto font-semibold'>Jacob Jones</h1>
            <p>245.5 FRY</p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src={Picno5} alt="" />
          </div>
          <div className='mt-[70px] ml-[10px]'>
            <h1 className='font-roboto font-semibold'>Jacob Jones</h1>
            <p>245.5 FRY</p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src={Picno6} alt="" />
          </div>
          <div className='mt-[70px] ml-[10px]'>
            <h1 className='font-roboto font-semibold'>Jacob Jones</h1>
            <p>245.5 FRY</p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src={Picno7} alt="" />
          </div>
          <div className='mt-[70px] ml-[10px]'>
            <h1 className='font-roboto font-semibold'>Jacob Jones</h1>
            <p>245.5 FRY</p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src={Picno8} alt="" />
          </div>
          <div className='mt-[70px] ml-[10px]'>
            <h1 className='font-roboto font-semibold'>Jacob Jones</h1>
            <p>245.5 FRY</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Top_seller_section;