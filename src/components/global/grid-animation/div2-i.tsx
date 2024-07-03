'use client'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { GenerationBlock1, image1, image2, image3, png1, png2, png3, png4, sticker1, sticker2, sticker3, sticker4 } from '@/lib/constants'
import { useAnimate } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const EmojiComponents = () => {



    const [index, setIndex] = useState(4);
    const [scope, animate ] = useAnimate();
    const hoverClass =  [
      {idx:0 , class:'glyphs'},
      {idx:1 , class:'emoji'},
      {idx:2 , class:'font'},
      {idx:3 , class:'layer'},
      
    ]

    useEffect(() => {
      hoverClass.forEach((item) => {
        if(index=== 4) {
          animate(`.${item.class}`, { opacity: 1 });
          
        }else if (index === item.idx) {
          animate(`.${item.class}`, { opacity: 1 });
        } else {
          animate(`.${item.class}`, { opacity: 0.5 });
        }
      });
    }, [index, animate]);
  

  return (
    <div className='w-full h-full'>
      <div className="h-[250px] w-full  mt-20 overflow-hidden">
        <div className="flex justify-evenly items-center w-full h-20 ">
          {GenerationBlock1.map((item, idx) => (

            <button className='flex justify-center items-center gap-2 border border-screen-border p-2 rounded-full bg-screen-item' key={idx} onMouseEnter={()=>{setIndex(idx)}} onMouseLeave={()=>setIndex(4)}>
              <Image src={item.icon} width={30} height={30} alt='image' />
              <p className=' font-satoshi-medium text-xl  '>{item.lable}</p>
            </button>
          ))}
        </div>
        <div className="h-full w-full absolute   left-0 right-0 z-0  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  flex items-center justify-center" ref={scope}>

          <div className="absolute z-10  -rotate-6 layer">
            <Layer />
          </div>
            <Switch className='border-screen-border bg-screen-item absolute z-10  top-20 layer' />
          <div className="absolute z-10 w-40  sm:visible top-4 rotate-12 layer">
            <Slider  />
          </div>


          <div className="absolute z-10 w-40 top-20 -right-20 emoji">
            <Image src={png1} width={40} height={40} alt='png' />
          </div>
          <div className="absolute z-10 w-40 top-2 -right-7  emoji">
            <Image src={png2} width={40} height={40} alt='png' />
          </div>
          <div className="absolute z-10 w-40 top-20 right-10   emoji">
            <Image src={png3} width={40} height={40} alt='png' />
          </div>
          <div className="absolute z-10 w-40 top-0 right-12  emoji">
            <Image src={png4} width={40} height={40} alt='png' />
          </div>


          <div className="absolute z-10 w-40 top-24 bottom-0 left-3  font">
            <Image src={sticker1} width={80} height={80} alt='png' />
          </div>
          <div className="absolute z-10 w-80 top-32 left-24  font">
            <Image src={sticker2} width={80} height={80} alt='png' />
          </div>


          {/* Stikers */}
          <div className="absolute z-10 w-80 top-0 left-12  glyphs">
            <Image src={sticker3} width={80} height={80} alt='png' />
          </div>
          <div className="absolute z-10 w-80 top-7 left-40 hidden  glyphs">
            <Image src={sticker4} width={80} height={80} alt='png' />
          </div>
         




        </div>
      </div>

    </div>
  )
}

export default EmojiComponents





const Layer = () => {
  return (
    <button className="w-32 mb-16 h-12 hover:border-white border-screen-border border  rounded-xl flex justify-center items-center font-satoshi-medium bg-violet-500 ">Hello World</button>
  )
}