import React from 'react'
import Rectangle from "../assets/images/Rectangle.png"
import card21a from "../assets/images/card21a.png"
import card21b from "../assets/images/card21b.png"
import card21c from "../assets/images/card21c.png"
import card21d from "../assets/images/card21d.png"
import card21e from "../assets/images/card21e.png"
import card21f from "../assets/images/card21f.png"
import card21g from "../assets/images/card21g.png"
import card22a from "../assets/images/card22a.png"
import card22b from "../assets/images/card22b.png"
import card22c from "../assets/images/card22c.png"
import card22d from "../assets/images/card22d.png"
import card22e from "../assets/images/card22e.png"
import card22f from "../assets/images/card22f.png"
import card22g from "../assets/images/card22g.png"
import card23a from "../assets/images/card23a.png"
import card23b from "../assets/images/card23b.png"
import card23c from "../assets/images/card23c.png"
import card23d from "../assets/images/card23d.png"
import card23e from "../assets/images/card23e.png"
import card23f from "../assets/images/card23f.png"
import card23g from "../assets/images/card23g.png"
import arrows from "../assets/images/arrows.png"




export const Top_collection = () => {
    return (
        <>
            <div className='flex flex-wrap max-w-[1318px] mx-auto px-[20px] py-[50px]  justify-between'>
                <div>
                    <h1 className='text-[64px]'>TOP COLLECTION</h1>
                </div>
                <div>
                    <button className='text-[#FE0101] text-[22px] font-semibold my-[40px]'><a href="">View more Collection</a></button>
                </div>

            </div>
            <div className='flex flex-wrap gap-3 max-w-[1318px] mx-auto '>
                <div className='max-w-[417px] max-h-[301px] bg-[#FFF9F9] px-[10px] py-[10px] rounded-[15px] shadow-2xl'>
                    <div className='bg-[#E7E7E7] py-[10px] px-[10px] rounded-[15px]'>
                        <div className='flex gap-3'>
                            <img src={card21a} className='max-w-[50%]' alt="" />
                            <img src={card21b} className='max-w-[50%] ' alt="" />

                        </div>
                        <div className='flex gap-3 py-[10px]'>
                            <img src={card21c} className='max-w-[25%]' alt="" />
                            <img src={card21d} className='max-w-[25%]' alt="" />
                            <img src={card21e} className='max-w-[25%]' alt="" />
                            <img src={card21f} className='max-w-[25%]' alt="" />

                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mt-[10px]'>
                            <img src={card21g} alt="" />
                        </div>
                        <div className='mt-[12px] ml-[10px]'>
                            <h1 className='font-semibold'>WONDERFUL ARTWORK</h1>
                            <p>Created by Jacob Jones</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[417px] max-h-[301px] bg-[#FFF9F9] px-[10px] py-[10px] rounded-[15px] shadow-2xl'>
                    <div className='bg-[#E7E7E7] py-[10px] px-[10px] rounded-[15px]'>
                        <div className='flex gap-3'>
                            <img src={card22a} className='max-w-[50%]' alt="" />
                            <img src={card22b} className='max-w-[50%] ' alt="" />

                        </div>
                        <div className='flex gap-3 py-[10px]'>
                            <img src={card22c} className='max-w-[25%]' alt="" />
                            <img src={card22d} className='max-w-[25%]' alt="" />
                            <img src={card22e} className='max-w-[25%]' alt="" />
                            <img src={card22f} className='max-w-[25%]' alt="" />

                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mt-[10px]'>
                            <img src={card22g} alt="" />
                        </div>
                        <div className='mt-[12px] ml-[10px]'>
                            <h1 className='font-semibold'>WONDERFUL ARTWORK</h1>
                            <p>Created by Jacob Jones</p>
                        </div>
                    </div>
                </div>
                <div className='max-w-[417px] max-h-[301px] bg-[#FFF9F9] px-[10px] py-[10px] rounded-[15px] shadow-2xl'>
                    <div className='bg-[#E7E7E7] py-[10px] px-[10px] rounded-[15px]'>
                        <div className='flex gap-3'>
                            <img src={card23a} className='max-w-[50%]' alt="" />
                            <img src={card23b} className='max-w-[50%] ' alt="" />

                        </div>
                        <div className='flex gap-3 py-[10px]'>
                            <img src={card23c} className='max-w-[25%]' alt="" />
                            <img src={card23d} className='max-w-[25%]' alt="" />
                            <img src={card23e} className='max-w-[25%]' alt="" />
                            <img src={card23f} className='max-w-[25%]' alt="" />

                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mt-[10px]'>
                            <img src={card23g} alt="" />
                        </div>
                        <div className='mt-[12px] ml-[10px]'>
                            <h1 className='font-semibold'>WONDERFUL ARTWORK</h1>
                            <p>Created by Jacob Jones</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Top_collection;