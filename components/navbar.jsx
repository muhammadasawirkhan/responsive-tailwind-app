import React from 'react';
import Logo from "../assets/images/Logo.png";

export const Navbar = () => {
    return (
        <div className='flex justify-around px-[65px] py-[25px]'>
            <div>
                <img src={Logo} alt="Logo" className='w-[50px]' />
            </div>
            <div className='flex gap-[50px] mt-[20px] ml-[20px]'>
                <a className='text-[#DE0308] border-b-2 border-[#DE0308] pb-1' href="">Home</a>
                <a href="">AI NFT Generation</a>

            </div>
            <div className='flex gap-[10px]'>
                <button class="bg-gradient-to-r from-[#FD0000] to-[#FF9292] text-white px-4 py-2 rounded-lg">
                    Connect Wallet
                </button>
                <button class="bg-white hover:bg-gradient-to-r from-[#FD0000] to-[#FF9292] hover:text-[white] text-[#FE0101] font-bold py-2 px-4 rounded border-2 border-[#FE0101]">
                    Create NFT
                </button>

            </div>
        </div>
    )
}
export default Navbar;

