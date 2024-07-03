'use client'
import React, { useEffect, useRef } from 'react';
import styles from './Wand.module.css';


interface WandProps {
  left?: string;
  top?: string;
  rotate?: string;
  opacity?:number;
  className?:string;
}

const Wand2: React.FC<WandProps> = ({ left, top, rotate,opacity ,className}) => {

  const ref = useRef<HTMLDivElement>(null);



  useEffect(() => {
    if (ref.current) {
      ref.current.animate(
        [
          { left: `${left}px`, top: `${top}px`, transform: `rotate(${rotate}deg)`, opacity }
        ],
        { duration: 400, fill: "forwards" }
      );
    }
  }, [left, top, rotate, opacity]); 





  return (
    <div id="wand" className={`wand ${className}`} style={{ left, top, transform: `rotate(${rotate})` ,opacity  }} ref={ref}
    >
      <div className={'cap'}></div>
    </div>
  );
};

export default Wand2;
