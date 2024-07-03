'use client';

import { getWandStyles, updateMouse, updateMouse2 } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const Wand = ({ state }: { state: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);





  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouse = updateMouse(e.clientX, e.clientY,400,400);
      const wandStyles = getWandStyles(mouse);

      if (ref.current && state) {
        ref.current.animate(
          [
            { left: wandStyles.left, top: wandStyles.top, transform: `rotate(${wandStyles.rotate})` }
          ],
          { duration: 400, fill: "forwards" }
        );
      }
    };


    if (state) {
      document.addEventListener('mousemove', handleMouseMove);
    } else {
      ref.current?.animate(
        [
          { left: '50%', top:'-20%' , transform: `rotate(10deg)` }
        ],
        { duration: 400, fill: "forwards" }
      );
      document.removeEventListener('mousemove', handleMouseMove);
    }


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [state]);


  return (
    <div className="mb-2 relative">
      <div className="wand " id="movingWand" ref={ref} >
        <div className="cap"></div>
        <div className="absolute"></div>
      </div>
    </div>
  );
};

export default Wand;
