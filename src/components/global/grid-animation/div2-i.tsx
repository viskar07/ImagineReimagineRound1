import { Switch } from '@/components/ui/switch'
import { GenerationBlock1 } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

const EmojiComponents = () => {
  return (
    <div className='w-full h-full'>
      <div className="h-[250px] w-full  mt-20 overflow-hidden">
        <div className="flex justify-evenly items-center w-full h-20 ">
          {GenerationBlock1.map((item, index) => (

            <button className='flex justify-center items-center gap-2 border border-screen-border p-2 rounded-full bg-screen-item' key={index}>
              <Image src={item.icon } width={30} height={30} alt='image' />
              <p className=' font-satoshi-medium text-xl '>{item.lable}</p>
            </button>
          ))}
        </div>
        <div className="h-full w-full absolute  left-0 right-0 z-0  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  flex items-center justify-center">
            <Layer />
            <Switch />
        </div>
      </div>

    </div>
  )
}

export default EmojiComponents





const Layer = () =>{
  return (
    <button className="w-32 mb-16 h-12 hover:border-white border-screen-border border  rounded-xl flex justify-center items-center font-satoshi-medium bg-violet-500 ">Hello World</button>
  )
}