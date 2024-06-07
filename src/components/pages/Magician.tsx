import React from 'react'
import MagicWand from '../global/MagicWand'
import { wandGlow } from '@/lib/constants'
import { LampComponent } from '../global/LampDemo'
import MobileNavigation from '../global/grid-animation/div-i'
import MagicRevile from '../global/grid-animation/div-ii'
import FlipCard from '../global/grid-animation/div-iii'
import ImageReveal from '../global/grid-animation/div-iv'
import { TextRevealCard } from '../global/grid-animation/div-v'
import { CardDemo } from '../global/grid-animation/div-vi'
import FigmaWindow from '../global/grid-animation/div-vii'
import Global from '../global/grid-animation/div-viii'

const Magician = () => {
  return (
    <section className='w-full h-full -mt-20'>
      <div className=" relative flex flex-col justify-center items-center z-0   ">
        <div className="z-0 w-[540px] h-[290px] bg-[#141416] rounded-[150px] mx-auto absolute top-[-32px] left-1/2 transform -translate-x-1/2 filter-blur-20" />
        <h1 className='z-30 text-[48px] md:text-[80px] font-[700] font-satoshi-bold tracking-tightest text-center  text-transparent custom-gradient-text '>
          Magician
        </h1>
        <p className='text-base md:text-[22px] text-center my-2 text-secondary font-satoshi-medium font-medium z-30'>Cast a spell on your Figma designs.</p>
        <button className='custom-button font-satoshi-bold mt-10'>Explore.Design </button>
        <div className="flex flex-col items-center justify-top h-[800px] w-full relative">
          <MagicWand variant={'horizontal'} />
          <LampComponent />
        </div>
      </div>

      <div className="w-full flex justify-center ">
        <div className="grid grid-cols-1 grid-rows-8 sm:grid-cols-2 sm:grid-row-6  xl:grid-cols-4 xl:grid-rows-3  gap-3 m-20 -mt-[570px] ">

          <div className="box-outlate w-[300px] row-auto"><MobileNavigation /></div>
          <MagicRevile />
          <FlipCard />
          <ImageReveal />
          <div className="box-outlate  w-[300px] sm:w-[612px] col-span-2">
            <TextRevealCard className='w-[612px] h-[400px] border-none mt-0' text='Lorem Ipsum' revealText='Magical'            />
          </div>
          <div className="box-outlate w-[300px] ">
            <CardDemo />
          </div>
          <div className="box-outlate w-[300px] sm:w-[612px] col-span-2 relative" >
            <FigmaWindow />
          </div>
          <Global />

        </div>
      </div>
    </section>
  )
}

export default Magician