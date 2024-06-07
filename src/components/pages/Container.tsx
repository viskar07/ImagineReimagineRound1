import React from 'react'
import { ContainerScroll } from '../global/ui/container-scroll-animation'
import { screenIcon } from '@/lib/constants'
import Image from 'next/image'
import BuildSequence from '../global/build-sequence'
import SearchSequence from '../global/search-sequence'
import CodeSequence from '../global/code-sequence'

const Container = () => {
  return (
    <section id='container' className='w-full h-full '>
      <ContainerScroll titleComponent={'hello'} >
        <div className="w-full h-full flex flex-col bg-bg-screen bg-screen">
          {/* pc panel */}
          <div className="w-full h-12 border-screen-border border rounded-t-[20px]">
            <div className="w-16 h-full ml-2 flex justify-between items-center">
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
            </div>
          </div>

          {/* contol panel */}
          <div className="w-full h-12 flex justify-between items-center border-b border-x border-x-screen-border border-b-screen-border">

            {/* 1 flex */}
            <div className="flex w-full h-full justify-start items-center">
              {screenIcon.map((icon, index) => (
                <div className="" key={index}>
                  <Image src={icon} width={44} height={44} alt='icon' className='' />
                </div>
              ))}
            </div>

            {/* 2 flex */}
            <div className="flex h-full w-full justify-end items-center gap-2 ">
              <div className="w-8 h-8 rounded-full bg-screen-border flex justify-center items-center">
                <div className="w-6 h-6 rounded-full bg-[#0b99ff] flex justify-center items-center text-white">Y</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-screen-border flex justify-center items-center">
                <div className="w-6 h-6 rounded-full bg-[#0b99ff] flex justify-center items-center text-white">Y</div>
              </div>

              {/* button */}
              <div className="mr-2 -ml-2">
                <button className="figma-share-button text-sm font-satoshi-regular font-bold">
                  Share
                </button>
              </div>

            </div>
            
          </div>
          <div className="w-full h-full border-b border-x flex  border-x-screen-border border-b-screen-border rounded-b-[20px]">
              <div className="h-full w-[15%] border-r-screen-border border-r  "></div>
              <div className="h-full w-full">
                {/* <BuildSequence /> */}
                {/* <SearchSequence /> */}
                <CodeSequence />
              </div>
              <div className="h-full w-[15%] border-l-screen-border border-l"></div>
            </div>
        </div>

      </ContainerScroll >

    </section>
  )
}

export default Container