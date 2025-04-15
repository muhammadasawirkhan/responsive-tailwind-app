import React from 'react'
import { Send } from "lucide-react";
import Traced from "../assets/images/Traced.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaTiktok } from 'react-icons/fa';

export const Footer_section = () => {
    return (
        <>
            <div className='max-w-[819px] mx-auto space-around pt-[90px] text-center '>
                <h1 className='text-[64px]'>Ready for Next NFT Drop?</h1>
                <div className=' relative mt-[4vh]'>
                    <input type="text" placeholder="info@gmail.com" class="sm:w-[580px] lg:w-[680px] h-[90px]  bg-[#fff] shadow-md p-3 border-2 border-red-300 rounded-lg focus:outline-none {/*focus:ring-2 focus:ring-blue-500 focus:border-blue-500*/}" />
                    <button className=' absolute sm:left-[500px] lg:left-[630px] sm:bottom-[6px] lg:bottom-[5px] w-[88px] h-[76px] text-white rounded-md bg-gradient-to-r from-[#FD0000] to-[#FF9292]'> <Send className="w-[32px] h-[32px] text-white ml-[27px]" />
                    </button>
                </div>
            </div>
            <div className=' max-w-[1320px] h-[358px] bg-gradient-to-r from-[#FD0000] to-[#FF9292] justif-around mx-auto my-[50px] rounded-[20px] block lg:flex '>
                <img src={Traced} alt="" />
                <div className='text-white text-[20px] ml-[120px]  -mt-[230px] lg:mt-[80px]'>
                    <p>NFT ALGO is the world’s leading NFTs <br /> marketplace where you can discover, sell <br /> and bid NFTs and get rich </p>
                    <div className="flex justify-left space-x-4 pt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-red-600 py-[10px] px-[10px] bg-white w-[40px] h-[40px] rounded-[10px] ">
                            <FaFacebookF />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-red-700  py-[10px] px-[10px] bg-white w-[40px] h-[40px] rounded-[10px]">
                            <Send />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-red-700  py-[10px] px-[10px] bg-white w-[40px] h-[40px] rounded-[10px]">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-red-400  py-[10px] px-[10px] bg-white w-[40px] h-[40px] rounded-[10px]">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-500  py-[10px] px-[10px] bg-white w-[40px] h-[40px] rounded-[10px]">
                            <FaInstagram />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-500  py-[10px] px-[10px] bg-white w-[40px] h-[40px] rounded-[10px]">
                            <FaTiktok />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-red-500  py-[10px] px-[10px] bg-white w-[40px] h-[40px] rounded-[10px]">
                            <FaGithub />
                        </a>


                    </div>
                </div>
                <div className='sm:flex sm:gap-3  lg:block lg:space-y-4 sm:ml-[90px] lg:ml-[150px] sm:mt-[10px] lg:mt-[50px]'>
                    <h1 className='text-[24px] font-semibold text-white'>About</h1>
                    <p className='text-white text-[20px]'><a href=" ">About NFT</a></p>
                    <p className='text-white text-[20px]'><a href=" ">Live Auctions</a></p>
                    <p className='text-white text-[20px]'><a href=" ">Collection</a></p>
                    <p className='text-white text-[20px]'><a href=" ">Activity</a></p>
                </div>

            </div>


        </>
    )
}
