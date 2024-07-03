'use client';

import { useEffect, useRef, useState } from 'react';
import { getWandStyles, revealImages, updateMouse2 } from '@/lib/utils';
import Tile from '../magic-components/Tile';
import Wand2 from '../magic-components/wand2';
import Heading from './grid-info';


const ImageReveal = () => {
  const [active, setActive] = useState(false);
  const [wandStyles, setWandStyles] = useState({ left: '50%', top: '20%', rotate: '-3deg' });
  const outerDivRef = useRef<HTMLDivElement>(null);



  const handleMouseMove = (e: MouseEvent) => {
    if (outerDivRef.current && active) {
      const mouse = updateMouse2(e.clientX, e.clientY, outerDivRef.current);
      setWandStyles(getWandStyles(mouse));
    }
  };
  useEffect(() => {
    if (active) {
      document.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);


  return (
    <div
      className="relative box-outlate w-[300px] sm:w-[612px] row-start-4 sm:row-auto col-span-2 flex justify-center items-center"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      ref={outerDivRef}

    >
    <div className="w-full h-full absolute top-8 left-7">
    <Heading heading='Generate magical visuals for your designs' description='With Magic Image, you can quickly generate images in Figma while you design.' />

    </div>
      <Wand2 {...wandStyles} />
      <Tile state={active} />
    </div>
  );
};

export default ImageReveal;
