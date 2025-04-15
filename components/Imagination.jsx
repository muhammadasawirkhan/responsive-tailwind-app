import React from 'react'
import Halfcircle from "../assets/images/Halfcircle.png"
import imgn1 from "../assets/images/imgn1.png"
import imgn2 from "../assets/images/imgn2.png"
import imgn3 from "../assets/images/imgn3.png"
import imgn4 from "../assets/images/imgn4.png"
import imgn5 from "../assets/images/imgn5.png"
import imgn6 from "../assets/images/imgn6.png"
import imgn7 from "../assets/images/imgn7.png"
import imgn8 from "../assets/images/imgn8.png"

export const Imagination = () => {
  return (
    <>

      <div className='relative flex max-w-[1320px]  mx-auto justify-around lg:py-[75px] sm:py-[75px]'>

        {/* <div className="absolute inset-0 bg-[#FD0000] blur-[209px] w-[200px] h-[500px] -z-10 translate-x-[450px] translate-y-[150px]"></div> */}
        <div className='absolute   bg-contain bg-center bg-no-repeat h-screen w-full' style={{ backgroundImage: `url(${Halfcircle})` }}>
          <div className='flex justify-between'>
            <div className='lg:-mt-[6vh]'>
              <img src={imgn1} alt="" />
            </div>
            <div className='flex  lg:gap-30 lg:ml-[9vw]'>
              <div className='lg:-mt-[8vh]  '>
                <img src={imgn8} alt="" />
              </div>
              <div className='lg:mt-[4vh]  lg:-mr-[4vw]'>
                <img src={imgn7} alt="" />
              </div>

            </div>
          </div>
          <div className='flex '>
            <div className='lg:-ml-[75px] sm:-mt-[9vh] lg:-mt-[1vh]'>
              <img src={imgn2} alt="" />
            </div>
            <div className='sm:mr-[8vw] lg:ml-[10vw] lg:mt-[0vh]'>
              <input type="text" placeholder="Enter text" class="sm:w-[500px] lg:w-[729px] h-[70px]  bg-[#fff] shadow-md p-3 border border-gray-300 rounded-lg focus:outline-none {/*focus:ring-2 focus:ring-blue-500 focus:border-blue-500*/}" />
              <button className=' absolute sm:left-[470px] sm:top-[212px] lg:left-[870px] lg:top-[193px] w-[119px] h-[50px] text-white rounded-md bg-[#FE0101]'>Generate</button>
            </div>
          </div>

          <div className='flex justify-between '>
            <div className='lg:mt-[110px] lg:-ml-[70px]'>
              <img src={imgn3} alt="" />
            </div>
            <div className=' lg:-mt-[1px] lg:-mr-[80px]'>
              <img src={imgn6} alt="" />
            </div>

          </div>
          <div>
            <div className='flex justify-between'>
              <div className='lg:ml-[10vw] lg:-mt-[12vh]'>
                <img src={imgn4} alt="" />
              </div>
              <div className='lg:mr-[9vw] lg:-mt-[10vh]'>
                <img src={imgn5} alt="" />
              </div>
            </div>
          </div>


        </div>
      </div>



    </>
  )
}
export default Imagination;