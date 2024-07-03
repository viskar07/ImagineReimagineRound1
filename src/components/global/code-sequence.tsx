'use client'
import React, { useEffect, useRef } from 'react'
import HighlightedCSSCode from './magic-components/CodeType'
import { useAnimate, useInView } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import Image from 'next/image';
import { Gcursor, Genius, loader } from '@/lib/constants';

const CodeSequence = () => {
  const [scope, animate] = useAnimate();


  useEffect(() => {
    const manageAnimation = async () => {


      await animate('.mouse1', { x: [0, -555], y: [200, 40], opacity: 1, }, { duration: 0.8, ease: 'easeInOut', type: 'spring' })
      await (
        animate('.mouse1', { x: [-555, -330], y: [40, 540], opacity: 1, }, { duration: 0.5, ease: 'easeInOut', type: 'spring' }),
        animate('.screen', { x: 0, y: 0, opacity: 1, scale: [0, 1], }, { duration: 0.7, ease: 'easeInOut', type: 'spring' })
      )


      await animate('.mouse1', { x: [-330, -530], y: [540, 50], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      await (
        animate('.mouse1', { x: [-530, -440], y: [50, 63], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.item1', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.8, ease: 'easeInOut', type: 'spring' })
      )

      await animate('.mouse1', { x: [-440, -350], y: [63, 50], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),

        await (
          animate('.mouse1', { x: [-350, -340], y: [50, 75], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
          animate('.item2', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
        )

      await animate('.mouse1', { x: [-340, -530], y: [75, 95], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      await (
        animate('.mouse1', { x: [-530, -470], y: [95, 170], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.item3', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
      )

      await animate('.mouse2', { x: [0, 555], y: [200, 40], opacity: 1, }, { duration: 2, ease: 'easeInOut', type: 'spring' })

      await animate('.mouse2', { x: [555, 460], y: [40, 110], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        await (
          animate('.item4', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
          animate('.mouse2', { x: [460, 550], y: [110, 130], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
        )

      await animate('.mouse1', { x: [-470, -530], y: [170, 180], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
      await Promise.all([
        animate('.item7', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse1', { x: [-530, -470], y: [180, 260], opacity: 1 }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
      ]);

      await (animate('.mouse2', { x: [550, 460], y: [130, 140], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse1', { x: [-470, -535], y: [260, 273], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
      )

      await Promise.all([
        animate('.mouse1', { x: [-535, -470], y: [273, 283], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      ]);
      await (
        animate('.mouse2', { x: [460, 530], y: [140, 140], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.item5', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      )
      await (
        animate('.mouse2', { x: [530, 460], y: [140, 150], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse1', { x: [-470, -660], y: [283, 290], opacity: 0, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      )

      await (
        animate('.item6', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse2', { x: [460, 510], y: [150, 155], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      )
      await animate('.mouse2', { x: [510, 460], y: [150, 180], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      await (
        animate('.item8', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse2', { x: [460, 550], y: [180, 195], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      )
      await animate('.mouse2', { x: [550, 460], y: [195, 210], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      await Promise.all([

        animate('.item9', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse2', { x: [460, 515], y: [210, 215], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
      ]),
      

      await animate('.mouse2', { x: [515, 460], y: [215, 225], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      await animate('.screen', { x: [0, -300],  opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      await animate('.mouse2', { x: [ 460,300], y: [215, 225], opacity: 0, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      
      await animate('.codescreen', { y: [0], x:[100,0] , opacity: 1 }, { duration: 0.7, ease: 'easeInOut', type: 'spring', })
      
     await(
      animate('.screen', { x: [ -100, -1000],  opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' ,delay:10}),
      animate('.codescreen', { y: [0], x:[0,1000] , opacity: 1 }, { duration: 0.7, ease: 'easeInOut', type: 'spring',delay:10 })
     )
      await animate('.outrow', { opacity: 1 })
      await animate('.logo',{rotate:650},{ duration: 1, ease: 'easeInOut', type: 'spring' })
      await animate('.shade',{opacity:1},{ duration: 0.2, ease: 'easeInOut', type: 'spring' })
      await animate('.htext',{y:[-2,0] ,opacity:0.8},{ duration: 0.1, ease: 'easeInOut', type: 'spring' })
      await animate('.ptext',{y:[-2,0] ,opacity:1},{ duration: 1, ease: 'easeInOut', type: 'spring' })

      
    }

      manageAnimation()
    


    }, [animate])



  return (
    <div className={` w-full h-full flex justify-start gap-20 items-center relative overflow-hidden`} ref={scope}>

<div className="w-12 h-10 absolute top-0 right-0 opacity-0 mouse1 z-50">
        <MousePointer2 className=' text-[#0b99ff] opacity-75 w-4 fill-[#0b99ff]' />
        <div className="w-3 h-1.5 mt-4 ml-8 opacity-75 rounded-xs bg-[#0b99ff]"></div>
      </div>

      <div className="w-12 h-10 absolute top-0 left-0 mouse2 opacity-0 z-50">
        <Image src={Gcursor} width={30} height={30} alt='mouse' className='' />
        <p className='ml-6 font-satoshi-medium text-lg'>You</p>
        <div className="w-20 rounded-b-2xl  flex justify-between items-center px-2  rounded-tr-2xl h-8 mt-1 ml-8 opacity-75 rounded-xs bg-black">
          <Image src={loader} width={25} height={25} alt='loader' className=' animate-spin delay-[2000]' />
          <p className=' font-satoshi-medium  pr-2'>AI </p>
        </div>
      </div>


      <div className="w-60 opacity-0 h-[235px] bg-transperent ml-[340px] -mt-[300PX] border-screen-border border rounded-[16px] overflow-hidden relative screen">

        <div className="item1 opacity-0 w-[104px] h-[18px] absolute top-4 left-4 bg-screen-item border-screen-border border rounded-[6px]"></div>
        <div className="item2 opacity-0 w-7 h-7 absolute top-4 right-2 bg-screen-item border-screen-border border rounded-full"></div>
        <div className="item3 opacity-0 w-[72px] h-[72px] absolute top-16 left-4 bg-screen-item border-screen-border border rounded-[12px]"></div>
        <div className="item4 opacity-0 w-[88px] h-[18px] absolute top-[75px] right-10 bg-screen-item border-screen-border border rounded-[6px]"></div>
        <div className="item5 opacity-0 w-[64px] h-[6px] absolute top-[100px] right-16 bg-screen-item rounded-[6px]"></div>
        <div className="item6 opacity-0 w-[48px] h-[6px] absolute top-[112px] right-20 bg-screen-item rounded-[6px]"></div>
        <div className="item7 opacity-0 w-[72px] h-[72px] absolute top-36 left-4 bg-screen-item border-screen-border border rounded-[12px]"></div>
        <div className="item8 opacity-0 w-[88px] h-[18px] absolute top-[150px] right-10 bg-screen-item border-screen-border border rounded-[6px]"></div>
        <div className="item9 opacity-0 w-[64px] h-[6px] absolute top-[175px] right-16 bg-screen-item rounded-[6px]"></div>
        <div className="item10 opacity-0 w-[48px] h-[6px] absolute top-[187px] right-20 bg-screen-item rounded-[6px]"></div>

      </div>

      <div className="w-[400px] h-[90%] opacity-0 flex flex-col bg-transperent border border-screen-border rounded-[16px] absolute right-10 overflow-hidden codescreen" >
        <div className="w-full h-8 border-b-screen-border border-b ">
          <div className="w-full h-full ml-2  flex justify-between items-center p-1">
            <p className=' font-satoshi-bold  opacity-70'>CSS</p>


            <div className="flex justify-between items-center w-16 mr-2 h-full">
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
            </div>

          </div>
        </div>
        <div className="w-full h-full p-2">
          <HighlightedCSSCode />
        </div>
      </div>
      <div className="outrow opacity-0 w-full h-full flex justify-center items-center mt-16 absolute" >
        <div className='w-[382px] h-[502px] relative flex flex-col items-center ' ref={scope}>
          <Image src={Genius} width={342} height={342} alt='logo' className='absolute z-0 opacity-60 logo' />
          <div className="blur absolute opacity-0 shade  z-10"></div>
          <h1 className='genius-display-text absolute top-40 z-30 p-2 font-satoshi-bold htext opacity-0'>Figma</h1>
          <p className='companion-text absolute top-72 z-30 ptext opacity-0'>Your AI code companion</p>

        </div>
      </div>
    </div>
  )
}

export default CodeSequence



