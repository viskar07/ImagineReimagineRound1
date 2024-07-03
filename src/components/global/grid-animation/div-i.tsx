'use client'
import React, { useEffect, useState } from 'react'
import Navigation from '../magic-components/navigation-div'
import MagicWand from '../MagicWand'
import { MotionContext, motion, useAnimate, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { star } from '@/lib/constants'
import Heading from './grid-info'

const MobileNavigation = () => {

    const [scope, animate] = useAnimate();
    const [hover, setHover] = useState(false)
    
    useEffect(() => {
        if (hover) {
            animate('#img1', { rotate: 360, x: 200 }, { duration: 1, ease: 'easeInOut', type:'spring' }),
            animate('#img2', { rotate: 360, x: 250, y: 50, }, { duration: 1, ease: 'easeInOut', type: 'spring' })
            animate('#img3', { rotate: 360, x: 200 }, { duration: 1, ease: 'easeInOut', type: 'spring' })
            animate('#wand', { x: 400, rotate: 10 }, { duration: 1.2, delay: 0.1, ease: 'easeInOut', type: 'spring' })
            animate('#beam', { x: 100, rotate: 90 }, { duration: 1, delay: 0.1, ease: 'easeInOut', type: 'spring' })
            animate('#navigation', { x: 300, rotate: 0 }, { duration: 1.4, ease: 'easeInOut', type: 'spring' })
        } else {
            animate('#img1', { rotate: 0, x: 0 }, { duration: 1, ease: 'easeInOut', type: 'spring' })
            animate('#img2', { rotate: 0, x: 0, y: 0 }, { duration: 1, ease: 'easeInOut', type: 'spring' })
            animate('#img3', { rotate: 0, x: 0 }, { duration: 1, ease: 'easeInOut', type: 'spring' })
            animate('#wand', { x: 0, rotate: -10 }, { duration: 1.1, ease: 'easeInOut', type: 'spring' })
            animate('#beam', { x: -40, rotate: 90 }, { duration: 1, delay: 0.1, ease: 'easeInOut', type: 'spring' })

            animate('#navigation', { x: -300, rotate: -30 }, { duration: 1, ease: 'easeInOut', type: 'spring' })



        }
    }, [hover])

    return (

        <div className=" w-full h-[800px] overflow-hidden flex  relative  " ref={scope} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} >
                <Heading 
                    heading='Design with AI magic'
                    description='Unlock your creativity and bring ideas to life with AI-powered design utilities.'
                />
            <div className="absolute -left-52">
                <div className="relative w-80 h-80 ml-[200px] mt-24">
                    <Image src={star} width={180} height={40} alt='star' className={`absolute top-10 right-20 `} id='img1' />
                    <Image src={star} width={100} height={40} alt='star' className='absolute left-4 top-2 ' id='img2' />
                    <Image src={star} width={30} height={10} alt='star' className='absolute left-16 bottom-28 ' id='img3' />
                </div>
            </div>

            <div className="absolute top-60 -ml-[350px]  -rotate-[10deg] origin-bottom" id='wand'>
                <MagicWand className='absolute top-[350px]' variant='vertical' />
            </div>

            <div className="absolute -left-[300px] -rotate-[30deg] origin-bottom mt-28" id='navigation' >
                <Navigation />
            </div>
        </div>
    )
}

export default MobileNavigation