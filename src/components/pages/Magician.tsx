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
import Heading from '../global/grid-animation/grid-info'

const Magician = () => {
  return (
    <section className='w-full h-full -mt-20' id='magician'>
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

      <div className="w-full flex justify-center lg:hidden">
        <div className="grid grid-cols-1 grid-rows-8 sm:grid-cols-2 sm:grid-row-6  xl:grid-cols-4 xl:grid-rows-3  gap-3 sm:m-20 m-3 -mt-[570px] ">

          <div className="box-outlate w-[300px] row-start-1 ">
            <MobileNavigation />
          </div>

          <FlipCard />
          <MagicRevile />
          
          <ImageReveal />

          <div className="box-outlate  w-[300px] sm:w-[612px] row-start-5 sm:row-auto col-span-2">
            <Heading heading='Wave goodbye to Lorem Ipsum' description='Magic Copy writes, edits, and rewrites Figma text layers so you can design with real copy.' />
            <TextRevealCard className='w-[612px] h-[400px] border-none mt-0' text='Lorem Ipsum' revealText='Magical' />
          </div>

          <div className="box-outlate w-[300px] row-start-6 md:row-auto">
            <Heading heading="Market's Leading AI" description='Revolutionizing design with cutting-edge automation and intuitive tools.' />
            <CardDemo />
          </div>

          <Global />
          <div className="box-outlate w-[300px] sm:w-[612px] col-span-2 row-start-8 sm:row-auto relative" >
            <Heading heading='Magically rename your layers' description='Magic Rename intelligently names your layers so you can spend more time designing.' />
            <FigmaWindow />
          </div>
          

        </div>
      </div>


      
      <div className="w-full lg:flex justify-center hidden lg:visible">
        <div className="grid grid-cols-1 grid-rows-8 sm:grid-cols-2 sm:grid-row-6  xl:grid-cols-4 xl:grid-rows-3  gap-3 m-20 -mt-[570px] ">

          <div className="box-outlate w-[300px] row-auto  ">
            <MobileNavigation />
          </div>

          <MagicRevile />
          <FlipCard />
          
          <ImageReveal />

          <div className="box-outlate  w-[300px] sm:w-[612px] col-span-2">
            <Heading heading='Wave goodbye to Lorem Ipsum' description='Magic Copy writes, edits, and rewrites Figma text layers so you can design with real copy.' />
            <TextRevealCard className='w-[612px] h-[400px] border-none mt-0' text='Lorem Ipsum' revealText='Magical' />
          </div>

          <div className="box-outlate w-[300px] ">
            <Heading heading="Market's Leading AI" description='Revolutionizing design with cutting-edge automation and intuitive tools.' />
            <CardDemo />
          </div>

          <div className="box-outlate w-[300px] sm:w-[612px] col-span-2 relative" >
            <Heading heading='Magically rename your layers' description='Magic Rename intelligently names your layers so you can spend more time designing.' />
            <FigmaWindow />
          </div>
          
          <Global />

        </div>
      </div>
    </section>
  )
}

export default Magician