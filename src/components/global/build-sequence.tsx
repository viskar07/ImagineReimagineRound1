'use client'
import { useAnimate, useInView, useScroll } from 'framer-motion'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Gcursor, Genius, loader } from '@/lib/constants'
import { MousePointer2, Target } from 'lucide-react'


const BuildSequence = () => {


  const [scope, animate] = useAnimate()
  const inView = useInView(scope, { once: true });



  useEffect(() => {
    
    const ArrangeAnimation = async () => {



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
        await (
          animate('.item7', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
          animate('.mouse1', { x: [-530, -470], y: [180, 260], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
        )

      await (animate('.mouse2', { x: [550, 460], y: [130, 140], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse1', { x: [-470, -535], y: [260, 273], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
      )

      await (
        animate('.item11', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse1', { x: [-535, -470], y: [273, 283], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      )
      await (
        animate('.mouse2', { x: [460, 530], y: [140, 140], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.item5', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      )
      await (
        animate('.mouse2', { x: [530, 460], y: [140, 150], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse1', { x: [-470, -660], y: [283, 290], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

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

      await (
        animate('.item9', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse2', { x: [460, 515], y: [210, 215], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      )

      await animate('.mouse2', { x: [515, 460], y: [215, 225], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      await (
        animate('.item10', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse2', { x: [460, 510], y: [225, 225], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      )

      await (
        animate('.mouse2', { x: [510, 500], y: [215, 300], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse1', { x: [-660, -535], y: [290, 300], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
      )

      await (

        animate('.item13', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse2', { x: [500, 600], y: [300, 430], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
      )

      await (
        animate('.item12', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse1', { x: [-535, -420], y: [300, 430], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })

      )
      await (
        animate('.mouse2', { x: [600, 370], y: [430, 460], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.mouse1', { x: [-420, -30], y: [430, 200], opacity: 0, }, { duration: 1.2, ease: 'easeInOut', type: 'spring' })
      )

      await (
        animate('.mouse2', { x: [370, 570], y: [460, 530], opacity: 1, }, { duration: 0.6, ease: 'easeInOut', type: 'spring' }),
        animate('.item14', { x: 0, y: 0, opacity: 1, scale: [0, 1] }, { duration: 0.6, ease: 'easeInOut', type: 'spring' })
      )
      

      await animate('.mouse2', { x: [570, 470], y: [530, 480], opacity: 0, }, { duration: 0.9, ease: 'easeInOut', type: 'spring' })

      await animate('.screen', { x: [0, 800], y: 0, opacity: 1, }, { duration: 0.9, ease: 'easeInOut', type: 'spring' })

      await animate('.outrow', { opacity: 1 })
      await animate('.logo',{rotate:250},{ duration: 1, ease: 'easeInOut', type: 'spring' })
      await animate('.shade',{opacity:1},{ duration: 0.3, ease: 'easeInOut', type: 'spring' })
      await animate('.htext',{y:[-2,0] ,opacity:0.2},{ duration: 1, ease: 'easeInOut', type: 'spring' })
      await animate('.ptext',{y:[-2,0] ,opacity:1},{ duration: 1, ease: 'easeInOut', type: 'spring' })




    }

      if(inView){

        ArrangeAnimation();
      }

  }, [animate,inView])



  return (
    <div className={` w-full h-full flex justify-center items-center relative `} ref={scope} >


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

      <motion.div

        className="w-60 h-[512px] bg-bg-screen-component opacity-0 border-screen-border border rounded-[16px] overflow-hidden relative origin-top-left  screen" id='screen'>

        <div className="item1 opacity-0 w-[104px] h-[18px] absolute top-4 left-4 bg-screen-item border-screen-border border origin-top-left rounded-[6px]"></div>
        <div className="item2 w-7 h-7  opacity-0 absolute top-4 right-2 bg-screen-item border-screen-border border rounded-full origin-top-left"></div>

        <div className="item3 w-[72px] opacity-0 h-[72px] absolute top-16 left-4 bg-screen-item border-screen-border border origin-top-left rounded-[12px]"></div>
        <div className="item4 w-[88px] opacity-0 h-[18px] absolute top-[75px] right-10 bg-screen-item border-screen-border border origin-top-left rounded-[6px]"></div>
        <div className="item5 w-[64px] opacity-0 h-[6px] absolute top-[100px] right-16 bg-screen-item rounded-[6px] origin-top-left"></div>
        <div className="item6 w-[48px] opacity-0 h-[6px] absolute top-[112px] right-20 bg-screen-item rounded-[6px] origin-top-left"></div>

        <div className="item7 w-[72px] opacity-0 h-[72px] absolute top-36 left-4 bg-screen-item border-screen-border border origin-top-left rounded-[12px]"></div>
        <div className="item8 w-[88px] opacity-0 h-[18px] absolute top-[150px] right-10 bg-screen-item border-screen-border origin-top-left border rounded-[6px]"></div>
        <div className="item9 w-[64px] opacity-0 h-[6px] absolute top-[175px] right-16 bg-screen-item rounded-[6px]"></div>
        <div className="item10 w-[48px] opacity-0 h-[6px] absolute top-[187px] right-20 bg-screen-item origin-top-left rounded-[6px]"></div>


        <div className="item11 w-[60px] opacity-0 h-[18px] top-[240px] left-4 absolute bg-screen-item border-screen-border origin-top-left border rounded-[6px]"></div>

        <div className="item12 w-[120px] opacity-0 h-[120px] top-[270px] left-4 top absolute bg-screen-item border-screen-border origin-top-left border rounded-[6px]"></div>
        <div className="item13 w-[120px] opacity-0 h-[120px] top-[270px] left-36 absolute bg-screen-item border-screen-border origin-top-left border rounded-[6px]"></div>

        <div className="item14 w-[200px] opacity-0 h-[60px] top-[430px] left-5 absolute bg-screen-item border-screen-border origin-top-left border rounded-[6px]"></div>


      </motion.div>

      <div className="outrow opacity-0 w-full h-full flex justify-center items-center mt-16 absolute" >
        <div className='w-[382px] h-[502px] relative flex flex-col items-center ' ref={scope}>
          <Image src={Genius} width={342} height={342} alt='logo' className='absolute z-0 opacity-60 logo' />
          <div className="blur absolute opacity-0 shade  z-10"></div>
          <h1 className='genius-display-text absolute top-40 z-30 p-2 font-satoshi-bold htext opacity-0'>Figma</h1>
          <p className='companion-text absolute top-72 z-30 ptext opacity-0'>Your AI design companion</p>

        </div>
      </div>


    </div>
  )
}

export default BuildSequence

