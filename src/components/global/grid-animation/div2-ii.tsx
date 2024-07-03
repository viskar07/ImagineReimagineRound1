import { black, emoji, emojis } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import{motion} from 'framer-motion'

const GerateComponents = () => {

  const  fadeinAnimationVarients = {
    initial :{
      opacity:0,
      y:100
    },
    animate:((index:number)=>({
      opacity:1,
      y:0,
      transition:{
        dealy:0.05*index,
      }
    }))
  }
  return (
    <div className='w-full h-72  mt-16 relative '>
      <div className="w-72 h-[200px] bg-[#1b1b1e] shadow-screen-shadow  border-screen-border border rounded-[16px] overflow-hidden absolute top-6 -left-16 p-2 flex gap-3 flex-col items-center">
        <div className="w-full h-[130px] border border-screen-border rounded-[16px]">
          <div className="w-full h-20 font-satoshi-bold text-sm ml-2 mt-3 text-secondary ">Icons Of mashed-up,iOS-style emojis</div>
          <div className="w-full h-8 font-satoshi-bold text-base text-secondary opacity-70 ml-2 flex justify-start items-center gap-2 "> Created By  Figma AI <Image src={black} width={25} height={25} alt='UI' /></div>
        </div>
        <div className="w-full h-[50px] border border-screen-border rounded-[16px] flex justify-center items-center bg-yellow-500 opacity-75  font-satoshi-bold text-xl text-black ">Generate </div>
      </div>

      <div className="w-80 h-[270px] bg-[#1b1b1e]  border-screen-border shadow-screen-shadow border rounded-[16px] overflow-hidden absolute bottom-0 p-3 -right-9">
        <div className="w-full h-[50px] bg-screen-item  flex justify-between items-center">
          <div className="w-36 h-full rounded-md border border-screen-border flex justify-center items-center text-secondary font-satoshi-medium">Save to Figma</div>

          <div className="w-40 h-full rounded-md border border-screen-border flex ml-1 ">
            <div className="w-[50%] h-full border-r border-r-screen-border  flex justify-center items-center font-satoshi-medium ">1x</div>
            <div className="w-[50%] h-full flex justify-center items-center font-satoshi-medium ">2x</div>
          </div>
        </div>

        <div className="w-full h-[180px] mt-3 border  bg-screen-item  border-screen-border rounded-md z-0  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  flex items-center justify-center gap-6 flex-wrap">
         {emojis.map((item,idx)=>(
          <motion.div className='w-[30px] h-[30px]' key={idx} variants={fadeinAnimationVarients} initial='initial' whileInView={"animate"} viewport={{once:true}} custom={idx}>
          <Image src={item} width={30} height={30} alt='emoji' key={idx} />

          </motion.div>
         ))}
        </div>


      </div>
    </div>
  )
}

export default GerateComponents