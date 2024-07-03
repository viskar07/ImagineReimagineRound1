'use client'
import { astronoteIcon, image } from '@/lib/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import Heading from './grid-info'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  return (

    <div className="box-outlate w-[300px] row-start-2 md:row-auto  perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Heading 
        heading='Conjure up creativity'
        description='Magician demystifies the creative process by magically turning your ideas into assets.'  
      />
      <div className={`z-[100] w-[200px] h-[200px] left-4 flex justify-between items-center relative border-none rounded-[36px] shadow-flipCard rotate-2 mt-28  transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="w-full h-full gap-2 bg-box-bg bg-transparent  border-none rounded-[32px] flex flex-col justify-center items-center .card-front  ">
          <Image src={image} width={50} height={50} alt='image' className='' />
        </div>
        <div className="bg-astronote  absolute w-full h-full backface-hidden flex  justify-center items-center bg-cover bg-center transform rotate-y-180 rounded-3xl "></div>
      </div>


      <div className={`z-[100] w-[72px] h-[72px] flex justify-between items-center -top-10 relative transition-transform duration-700 shadow-flipCard rounded-[12px] transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="w-full h-full -top-8 -rotate-2 gap-2 bg-box-bg bg-transparent border-none rounded-[12px] flex flex-col justify-center items-center .card-front  ">
          <Image src={image} width={20} height={20} alt='image' className='' />
        </div>
        <div className=" absolute  w-full h-full backface-hidden flex  justify-center items-center bg-cover bg-center transform rotate-y-180 rounded-[12px] ">
          <Image src={astronoteIcon} width={10} height={10} alt='image' className='absolute w-full h-full' />

        </div>
      </div>
    </div>


  )
}

export default FlipCard 