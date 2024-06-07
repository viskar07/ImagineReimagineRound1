'use client'
import { image, imageRevile1, imageRevile2, imageRevile3 } from '@/lib/constants';
import { revealImages } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef } from 'react';







const Tile: React.FC = ({ }) => {


  const tileRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const revealImages = (mouseX: number) => {
      tileRefs.forEach((ref) => {
        if (ref.current) {
          const dimensions = ref.current.getBoundingClientRect();
          const relativeMouseX = mouseX - dimensions.left;
          const mouseXAsDecimal = Math.max(Math.min(relativeMouseX / dimensions.width, 1), 0);

          const opacity = mouseXAsDecimal;
          const blur = 1 - mouseXAsDecimal;

          ref.current.style.setProperty('--opacity', `${opacity}`);
          ref.current.style.setProperty('--blur', `${blur}`);
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      revealImages(e.clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const commonClasses = `w-[200px] h-[200px] bg-box-bg rounded-[32px] flex justify-center items-center overflow-hidden shadow-flipCard relative`;

  return (
    <div className="flex">
      <div ref={tileRefs[0]} className={`${commonClasses} z-[7] -bottom-8 left-10 transform -rotate-2`}>
        <Image src={image} height={50} width={50} alt='imageIcon' />
        <Image src={imageRevile1} width={200} height={200} alt='image' className='bg-cover absolute top-0 bottom-0 left-0 right-0 rounded-[32px]' style={{ opacity: 'var(--opacity)', filter: 'blur(calc(var(--blur) * 10px))' }} />
      </div>
      <div ref={tileRefs[1]} className={`${commonClasses} z-[6] -bottom-[39px] left-[10px] transform -rotate-2`}>
        <Image src={image} height={50} width={50} alt='imageIcon' />

        <Image src={imageRevile2} width={200} height={200} alt='image' className='bg-cover absolute top-0 bottom-0 left-0 right-0 rounded-[32px]' style={{ opacity: 'var(--opacity)', filter: 'blur(calc(var(--blur) * 10px))' }} />
      </div>
      <div ref={tileRefs[2]} className={`${commonClasses} z-[5] -bottom-10 -left-10 transform rotate-[5deg]`}>
        <Image src={image} height={50} width={50} alt='imageIcon' />

        <Image src={imageRevile3} width={200} height={200} alt='image' className='bg-cover absolute top-0 bottom-0 left-0 right-0 rounded-[32px]' style={{ opacity: 'var(--opacity)', filter: 'blur(calc(var(--blur) * 10px))' }} />
      </div>
    </div>


  );
};

export default Tile;
