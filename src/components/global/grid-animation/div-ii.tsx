'use client'
import { magicRevile } from '@/lib/constants'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Wand from '../magic-components/moving-wand'
import {  motion, useAnimation } from 'framer-motion'
import { getWandStyles, updateMouse, updateMouse2 } from '@/lib/utils'
import Heading from './grid-info'

interface props {
  className?:string
}
const MagicRevile = (Props:props) => {
  const [active, setActive] = useState(false)

  const blurRef =  useRef<HTMLDivElement>(null);


  useEffect(()=>{
    const handleMouseMove = (e: MouseEvent) => {
      const mouse = updateMouse(e.clientX, e.clientY,400,600);
      const wandStyles = getWandStyles(mouse);

      if (blurRef.current && active) {
        blurRef.current.animate(
          [
            { left: wandStyles.left, top: wandStyles.top, transform: `rotate(${wandStyles.rotate})` }
          ],
          { duration: 400, fill: "forwards" }
        );
      }
    };


    if (active) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      blurRef.current?.animate(
        [
          { left: '50%', top:0 , transform: `rotate(10deg)` }
        ],
        { duration: 400, fill: "forwards" }
      );
      document.removeEventListener('mousemove', handleMouseMove);
    }


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  },[active])

  return (
    <motion.div className={`box-outlate w-[300px] ${Props.className} row-start-3 md:row-auto  sm:w-[612px] sm:col-span-2 relative `}  onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)}>
      <Heading 
        heading='Generate SVG icons for anything'
        description='Magic Icon generates infinitely scalable SVG icons to use anywhere in your design.'  
      />
      <div className={`w-full h-full  `} >
        <div className=" relative " >
          <Wand state={active}/>
          <div className="absolute blur-18 w-[800px] h-[900px] z-50 bg-[#1d1c20]  -rotate-45 " ref={blurRef}  style={{ marginTop: '-50px' }} ></div>
        </div>
        <div className="magic-icons-fade absolute bottom-0 left-0 right-0 z-10"></div>
        <div className="flex justify-center items-center flex-wrap gap-[22px] mt-24 ">
          {magicRevile.map((icon, index) => (
            <div className="tile-icon" key={index}>
              <Image src={icon} width={48} height={48} alt={`icon${index}`} />
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  )
}




export default MagicRevile