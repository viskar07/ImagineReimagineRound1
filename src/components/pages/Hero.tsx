import React from 'react'
import Navbar from '../global/Navbar'
import Image from 'next/image'
import SolarSystem from './SolarSystem'

const Hero = () => {
  return (
    <section id='hero' className='mb-20'>
      <div className='w-full h-full flex flex-col items-center z-20 mt-10'>
        <Navbar />
        <h1 className=' text-[48px] md:text-[80px] font-[700] font-satoshi-bold tracking-tightest text-center leading-none mt-32 mb-4 text-transparent custom-gradient-text '>
          Design tools<br /> from the future.
        </h1>
        <p className='text-base md:text-[22px] text-center my-6 text-secondary font-satoshi-medium font-medium z-30'>Unleash your creativity with Diagram&apos;s <br />

          AI-powered design tools.
        </p>

        <button className='custom-button flex gap-2 mt-3 z-30'>
          <Image src="/icons/diagram-logo.svg" width={20} height={20} alt='logo' />
          <h2 className='font-satoshi-medium'>Explore the future</h2>
        </button>

      </div>

      <SolarSystem />

    </section>
  )
}

export default Hero


