
import { useEffect, useState } from 'react'
import { ContainerScroll } from '../global/ui/container-scroll-animation'
import { avatar, loader, screenIcon } from '@/lib/constants'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import BuildSequence from '../global/build-sequence'
import SearchSequence from '../global/search-sequence'
import CodeSequence from '../global/code-sequence'
import Controller from '../global/controller'

const Container = () => {





  return (
    <section id='automation' className='w-full h-full' >
      <div className="relative flex flex-col justify-center items-center z-0">
        <div className="z-0 w-[540px] h-[290px]" />
        <h1 className='z-30 text-[48px] md:text-[80px] font-[700] font-satoshi-bold tracking-tightest text-center text-transparent custom-gradient-text'>
          Automation
        </h1>
        <p className='text-base md:text-[22px] text-center my-2 text-secondary font-satoshi-medium font-medium z-30'>
        Automate Your Design Process Effortlessly .

        </p>
      </div>

      <ContainerScroll titleComponent=''>
        <div className="w-full h-full flex flex-col bg-bg-screen bg-screen">
          {/* pc panel */}
          <div className="w-full h-12 border-screen-border border rounded-t-[20px]">
            <div className="w-16 h-full ml-2 flex justify-between items-center">
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
            </div>
          </div>

          {/* control panel */}
          <div className="w-full h-12 flex justify-between items-center border-b border-x border-x-screen-border border-b-screen-border">
            {/* 1 flex */}
            <div className="flex w-full h-full justify-start items-center">
              {screenIcon.map((icon, index) => (
                <div key={index}>
                  <Image src={icon} width={44} height={44} alt='icon' />
                </div>
              ))}
            </div>

            {/* 2 flex */}
            <div className="flex h-full w-full justify-end items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-screen-border flex justify-center items-center">
                <div className="w-6 h-6 rounded-full bg-[#0b99ff] flex justify-center items-center text-white">Y</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-screen-border flex justify-center items-center">
                <Image src={loader} width={25} height={25} alt='loader' className='hover:animate-spin' />
              </div>
              {/* button */}
              <div className="mr-2 -ml-2">
                <button className="figma-share-button text-sm font-satoshi-regular font-bold">
                  Share
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full border-b border-x flex border-x-screen-border border-b-screen-border rounded-b-[20px]">
            <div className="h-full w-[15%] border-r-screen-border border-r"></div>
            <div className="h-full w-full relative">
                <BuildSequence  />
                {/* <CodeSequence /> */}
                {/* <SearchSequence  /> */}

            </div>
            <div className="h-full w-[15%] border-l-screen-border border-l"></div>
          </div>
        </div>
      </ContainerScroll>
      <div className="w-full flex justify-center items-center">
        <Controller  />
      </div>
    </section>
  )
}

export default Container



{/* <motion.div
key={component}
initial={{ opacity: 0, x: 300 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -300 }}
transition={{ duration: 0.5 }}
className="absolute inset-0"
>
{/* {renderComponent(component)} */}
// </motion.div> */}


