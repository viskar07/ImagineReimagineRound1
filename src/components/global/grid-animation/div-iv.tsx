'use client';

import { useEffect, useRef, useState } from 'react';
import { getWandStyles,  revealImages,  updateMouse2 } from '@/lib/utils';
import Tile from '../magic-components/Tile';
import Wand2 from '../magic-components/wand2';


const ImageReveal = () => {
  const [active, setActive] = useState(false);
  const [wandStyles, setWandStyles] = useState({ left: '50%', top: '20%', rotate: '-3deg' });
  const outerDivRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<HTMLDivElement[]>([]);



// useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const mouseX = e.clientX;
//       revealImages(mouseX, tilesRef.current);
//     };

//     if (active) {
//       document.addEventListener('mousemove', handleMouseMove);
//     } else {
//       document.removeEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [active]);


  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     const mouse = updateMouse2(e.clientX, e.clientY, outerDivRef.current);
  //     setWandStyles(getWandStyles(mouse));
  //   };

  //   if (active) {
  //     document.addEventListener('mousemove', handleMouseMove);
  //   } else {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   }

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, [active]);

  const handleMouseMove = (e: MouseEvent) => {
    if (outerDivRef.current && active) {
      const mouse = updateMouse2(e.clientX, e.clientY, outerDivRef.current);
      setWandStyles(getWandStyles(mouse));
      const mouseX = e.clientX;
      revealImages(mouseX, tilesRef.current,active);
    }
  };
  useEffect(() => {
    if (active) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);


  return (
    <div
      className="relative box-outlate w-[300px] sm:w-[612px] col-span-2 flex justify-center items-center"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      ref={outerDivRef}
    >
      <Wand2 {...wandStyles} />
      <Tile />
    </div>
  );
};

export default ImageReveal;
