'use client'
import Navbar from '../global/Navbar'
import Image from 'next/image'
import SolarSystem from './SolarSystem'
import {  figmaSvg } from '@/lib/constants'
import { useAnimate } from 'framer-motion'
import { useEffect } from 'react'

const Hero = () => {
  const [scope,animate]=useAnimate();
  useEffect(()=>{
    const animationSeq = async () =>{

    await animate('.htext', {y:[10,0] , opacity:1} ,{duration:1,type:'spring' ,ease:'easeInOut'})
    await animate('.ptext', {opacity:1,y:[10,0] } ,{duration:1,type:'spring' ,ease:'easeInOut'})
    await animate('.btn', {opacity:1,y:[10,0] } ,{duration:1,type:'spring' ,ease:'easeInOut'})
    // animate(scope.current, {opacity:1} ,{duration:1,type:'spring' ,ease:'easeInOut'})
    // animate(scope.current, {opacity:1} ,{duration:1,type:'spring' ,ease:'easeInOut'})
    }
    animationSeq()
  },[animate])
  
  return (
    <section id='hero' className='mb-20'>
      <div className='w-full h-full flex flex-col items-center z-20 mt-10' ref={scope}>
        <Navbar />
        <h1 className='htext text-[48px] opacity-0 md:text-[80px] font-[700] font-satoshi-bold  tracking-tightest text-center leading-none mt-32 mb-4 text-transparent custom-gradient-text '>
          Design tools<br /> from the future.
        </h1>
        <p className='ptext text-base opacity-0 md:text-[22px] text-center my-6 text-secondary font-satoshi-medium font-medium z-30'>Unleash your creativity with Diagram&apos;s <br />

          AI-powered design tools.
        </p>

        <button className='btn opacity-0 custom-button flex gap-2 mt-3 z-30 '>
          <Image src={figmaSvg} width={20} height={20} alt='logo' />
          <h2 className='font-satoshi-medium'>Explore the future</h2>
        </button>

      </div>

      <SolarSystem />

    </section>
  )
}

export default Hero

