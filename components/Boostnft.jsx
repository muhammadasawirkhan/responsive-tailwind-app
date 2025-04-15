import React from 'react';
import Subtract from "../assets/images/Subtract.png"
import Subtractmd from "../assets/images/Subtractmd.png"
import Subtractsm from "../assets/images/Subtractsm.png"
import monkey from "../assets/images/monkey.png"
import monkeymd from "../assets/images/monkeymd.png"
import Upward from "../assets/images/Upward.png"
import Upward1 from "../assets/images/Upward1.png"

import monkeysm from "../assets/images/monkeysm.png"
import Ellipse from "../assets/images/Ellipse.png"
import Price from "../assets/images/Price.png"
import stockmd from "../assets/images/stockmd.png"
import Groupboost from "../assets/images/Groupboost.png"


export const Boostnft = () => {
  return (
    <>
      <div className="flex flex-wrap sm:mt-[150vh] lg:mt-[100vh] max-w-[1320px] justify-around mx-auto  ">
        <div className=''>
          <div className='min-w-[480px] max-w-[632px]'>
            <h2 className="text-7xl font-semibold sm:text-center lg:text-left">Boost Your NFTs: Enhance Visibility and Value</h2>
          </div>
          <div className='min-w-[480px] max-w-[580px] mt-[30px]'>
            <p className='text-[18px] sm:text-center lg:text-left'>
              The Boost feature is a premium service that allows NFT creators and collectors to elevate their listings on our marketplace. By boosting an NFT, you can ensure it appears prominently in search results, featured sections, and on the homepage, maximizing exposure to potential buyers.
            </p>
          </div>

          <div className='relative sm:hidden lg:block lg:left-[600px] lg:bottom-[200px]'>
            <img src={Upward1} alt="" />
          </div>
          <div className='relative sm:hidden lg:block w-[100px] lg:left-[1000px] lg:bottom-[400px]'>
            <img src={Upward} alt="" />
          </div>
        </div>


        <div>
          {/*card5 */}
          <div className='relative min-w-[308px] max-w-[308px] '>
            <img src={Subtract} className='' alt="" />
            <div className='flex absolute bottom-[195px] z-[1] left-[25px]'>
              <div>
                <img src={Ellipse} alt="" />
              </div>
              <div className='mt-[2px] ml-[4px] sm:mb-[125px] sm:ml-[4px]'>
                <h1>STELLA NOVA</h1>
                <p>@Stella Nova</p>
              </div>
            </div>
            <div className='absolute top-[98px] left-[18px] sm:top-[90px] sm:left-[13px]'>
              <img src={monkey} className='w-[272px]  rounded-[14px] ' alt="" />
            </div>
            <div className='absolute z-[1] bottom-[30px] left-[160px] sm:bottom-[28px] sm:left-[145px] '>
              <img src={Price} alt="" />
            </div>
            <div>
              <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[43px] left-[30px] 2xl:bottom-[40px] 2xl:left-[35px]'>BUY</button>
            </div>

          </div>

          {/*card6 */}
          <div className='flex'>
            <div className='relative top-[70px] min-w-[308px] max-w-[308px] opacity-[50%]'>
              <img src={Subtractmd} className='' alt="" />
              <div className='flex absolute bottom-[80px] z-[1] left-[25px]'>
                <div>
                  <img src={Ellipse} className='w-[31px]' alt="" />
                </div>
                <div className='mt-[2px] ml-[4px] sm:mb-[125px] sm:ml-[4px] text-[10px]'>
                  <h1>STELLA NOVA</h1>
                  <p>@Stella Nova</p>
                </div>
              </div>
              <div className='absolute lg:top-[68px] lg:left-[18px] sm:top-[60px] sm:left-[13px]'>
                <img src={monkeymd} className='  rounded-[14px] ' alt="" />
              </div>
              <div className='absolute w-[73px] z-[1] lg:bottom-[30px] lg:left-[160px] sm:bottom-[22px] sm:left-[115px] '>
                <img src={Price} alt="" />
              </div>
              <div className='absolute bottom-[20px] left-[20px]'>
                <img src={stockmd} alt="" />
              </div>
            </div>
            <div className='relative  min-w-[308px] max-w-[308px] opacity-[75%] '>
              <img src={Subtractmd} className=' ml-[3.5vw]' alt="" />
              <div className='flex absolute bottom-[80px] z-[1] left-[25px]'>
                <div>
                  <img src={Ellipse} className='w-[31px] ml-[3.5vw]' alt="" />
                </div>
                <div className='lg:mt-[2px] lg:ml-[4px] sm:mb-[125px] sm:ml-[4px] text-[10px]'>
                  <h1>STELLA NOVA</h1>
                  <p>@Stella Nova</p>
                </div>
              </div>
              <div className='absolute sm:top-[63px] sm:left-[34px] lg:top-[60px] lg:left-[73px]'>
                <img src={monkeymd} className='  rounded-[14px] ' alt="" />
              </div>
              <div className='absolute w-[73px] z-[1] sm:bottom-[22px] sm:left-[35px] lg:bottom-[22px] lg:left-[172px] '>
                <img src={Price} alt="" />
              </div>
              <div className='absolute sm:bottom-[20px] lg:bottom-[20px] sm:left-[140px] lg:left-[75px]'>
                <img src={stockmd} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' '>
        <img src={Groupboost} className='w-[35vw] sm:hidden lg:block relative lg:bottom-[670px] lg:left-[865px]' alt="" />
      </div>
    </>

  );
};

export default Boostnft;