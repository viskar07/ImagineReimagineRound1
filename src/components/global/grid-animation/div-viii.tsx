'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { fglow,  figmaIcon } from '@/lib/constants'


const Global = () => {
  const  [active,setActive]=useState(false)
  return (
    <div className="box-outlate w-[300px]">
        <div className="w-full h-80  relative mt-10">
            <div className="w-full h-full " onMouseEnter={()=>{setActive(true)}} onMouseLeave={()=>{setActive(false)}}>
            <Image src={figmaIcon} width={150} height={150} alt='figma' className='absolute bottom-1 left-10 z-20 '/>
            </div>
            <div className={`w-full h-full ${!active? 'hidden' : ''}`}>
            <Image src={fglow} width={220} height={220} alt='figma' className='absolute -bottom-5 -left-1   z-10 '/>
            </div>
        </div>
    </div>
  )
}

export default Global




