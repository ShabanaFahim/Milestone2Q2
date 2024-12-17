import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url("/banner.png")] bg-cover'
      style={{ backgroundSize: "cover", backgroundPosition: "right top" }}
    >
      <><Navbar /><div className='container grid lg:grid-clos-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex-flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Shabana Faheem</p>
         
          </div>

        </div>
      </div></>
    </div>


  )
}

export default Hero
