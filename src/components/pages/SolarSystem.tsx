import { Dcutout, FigmaLogo, automator, cursor, loaderLogo, orbit1, orbit2, orbit3, orbit4, orbit5, orbit6, orbit7, orbit8, planet1, planet2, planet3, planet4, planet5, planet6, planet7, planet8, ring, ui } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

const SolarSystem = () => {
  return (
    <div className='w-full h-full mt-10 z-10'>
      <div className="w-full h-screen flex flex-col justify-center items-center overflow-visible relative">

        <div className="w-[152px] h-[152px] rounded-full bg-[#656566] relative">
          <div className='absolute w-[152px] h-[152px] rounded-full bg-white bottom-2 opacity-80' >
            <Image src={FigmaLogo} width={70} height={70} alt='D-cutout' className='absolute top-[30px] left-[45px] opacity-85' />

          </div>
        </div>

        {/* Orbit 1  */}
        <div className="w-[266] h-[266] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
          <Image src={orbit1} width={266} height={266} alt='orbit-1' className='min-w-[266px]' />
          {/* Planet Div */}
          <div className="absolute top-0 bottom-0 left-0 right-0 -m-2 animate-spin-medium   ">
            <Image src={planet1} width={20} height={20} alt='planet' className='absolute top-[50%] bottom-[50%] right-0 -translate-y-1/2' />
          </div>
        </div>

        {/* Orbit 2  */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " >
          <Image src={orbit2} width={366} height={366} alt='orbit-2' className='  min-w-[366px] ' />
          {/* Planet Div */}
          <div className="absolute top-0 bottom-0 left-0 right-0 -m-3 animate-spin-medium">
            <Image src={planet2} width={24} height={24} alt='planet' className='absolute top-[50%] bottom-[50%] -translate-y-1/2' />
          </div>
        </div>

        {/* Orbit 3  */}
        <div className="w-[266] h-[266] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
          <Image src={orbit3} width={500} height={500} alt='orbit-3' className='min-w-[500px]' />
          {/* Planet Div */}
          <div className="absolute top-0 bottom-0 left-0 right-0 -m-10 animate-spin-fast  ">
            <Image src={planet3} width={77} height={77} alt='planet' className='absolute left-[50%] right-[50%] -translate-x-1/2' />
          </div>
        </div>

        {/* Orbit 4  */}
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 " >
          <Image src={orbit4} width={650} height={650} alt='orbit-4' className='min-w-[650px]' />
          {/* Planet Div */}
          <div className="absolute top-0 bottom-0 left-0 right-0 -m-12 animate-spin-medium">
            <Image src={planet4} width={110} height={110} alt='planet' className='absolute left-[50%] right-[50%] bottom-0 -translate-x-1/2' />
            <Image src={automator} width={110} height={110} alt='planet' className='absolute left-[50%] right-[50%] bottom-0 -translate-x-1/2' />
          </div>
        </div>

        {/* Orbit 5  */}
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
          <Image src={orbit5} width={820} height={820} alt='orbit-5' className='min-w-[820px]' />
          {/* Planet Div */}
          <div className="absolute top-0 bottom-0 left-0 right-0 -m-12 animate-spin-fast">
            <Image src={planet5} width={96} height={96} alt='planet' className='absolute top-[50%] bottom-[50%] right-0 -translate-y-1/2 ' />
            <Image src={ui} width={96} height={96} alt='planet' className='absolute top-[50%] bottom-[50%] right-0 -translate-y-1/2 ' />
          </div>
        </div>

        {/* Orbit 6  */}
        <div className="w-[266] h-[266] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
          <Image src={orbit6} width={950} height={950} alt='orbit-6' className='min-w-[950px]' />
          {/* Planet Div */}
          <div className="absolute top-0 bottom-0 left-0 right-0 -m-12 animate-spin-medium ">
            <Image src={planet6} width={90} height={90} alt='planet' className='absolute left-[50%] right-[50%] -translate-x-1/2' />
            <Image src={loaderLogo} width={90} height={90} alt='planet' className='absolute left-[50%] right-[50%] opacity-65 -translate-x-1/2' />
          </div>
        </div>

        {/* Orbit 7  */}
        <div className="w-[266] h-[266] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
          <Image src={orbit7} width={1060} height={1060} alt='orbit-7' className=' rounded-full min-w-[1060px]' />
          {/* Planet Div */}
          <div className="absolute top-0 bottom-0 left-0 right-0 -m-12 animate-spin-slow">
            <Image src={planet7} width={90} height={90} alt='planet' className='absolute top-[50%] bottom-[50%] -translate-y-1/2' />
            <Image src={ring} width={90} height={90} alt='planet' className='absolute top-[50%] bottom-[50%] -translate-y-1/2 ' />
          </div>
        </div>

        {/* Orbit 8  */}
        <div className="w-[266] h-[266] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
          <Image src={orbit8} width={1200} height={1200} alt='orbit-8' className='min-w-[1200px] ' />
          {/* Planet Div */}
          <div className="absolute top-0 bottom-0 left-0 right-0 -m-3  animate-spin-slow ">
            <Image src={planet8} width={28} height={28} alt='planet' className='absolute left-[50%] right-[50%] bottom-0 -translate-x-1/2' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default SolarSystem