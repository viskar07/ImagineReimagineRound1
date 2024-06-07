'use client';
import { grain } from '@/lib/constants';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Wand2 from '../magic-components/wand2';
import Frame from '../Frame';

const FigmaWindow = () => {
  const [active, setActive] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleToggle = () => {
    setActive(prev => !prev);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 300); // Adjust duration as needed
  };

  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  };

  

  return (
    <div className="w-full h-full relative">
      <div className={`${!active && 'hidden'} absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl`}></div>
      <div className="figma-window top-36 -right-20">
        <Image src={grain} width={610} height={400} alt="grain" className="absolute opacity-40 top-0 bottom-0 left-0 right-0 bg-cover rounded-[24px]" />
        <div className="w-[440px] h-full flex flex-col overflow-hidden">
          <Frame title={`Frame 21472344`} subtitle="Checkout Screen" state={active} />
          <Frame title={`Frame 21472345`} subtitle="Info Card" className='pl-10'  state={active} />
          <Frame title={`Frame 21472346`} subtitle="Order Detail" className='pl-10' state={active}  />
          <Frame title={`Frame 21472347`} subtitle="Button"  state={active} />

        </div>
        <div className="w-full h-full bg-[#2b292e] flex justify-center">
        <Frame title={`Frame 21472347`} subtitle="Info Card"  className='absolute left-[270px] top-5 text-[#838286] text-sm' state={active} />

          <div className="h-[400px] w-[150px] right-5 top-20 rounded-[48px] bg-[#3e3d42] relative">
            <div className="absolute top-0 bottom-0 left-0 right-0 border-[2px] border-[#18a0fb]">
              <div className="w-[14px] h-[14px] bg-white border-[2px] border-[#18a0fb] absolute -top-2 -left-2"></div>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute top-0 left-72"
          onClick={handleToggle}
          animate={isShaking ? shakeAnimation : {}}
        >
          <Wand2 />
        </motion.div>
      </div>
    </div>
  );
};

export default FigmaWindow;
