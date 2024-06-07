import React from 'react';
import styles from './Wand.module.css';

interface WandProps {
  left?: string;
  top?: string;
  rotate?: string;
  opacity?:number;
  className?:string;
}

const Wand2: React.FC<WandProps> = ({ left, top, rotate,opacity ,className}) => {
  return (
    <div id="wand" className={`wand ${className}`} style={{ left, top, transform: `rotate(${rotate})` ,opacity ,transitionDuration:'400',fill:'forward' }}>
      <div className={'cap'}></div>
    </div>
  );
};

export default Wand2;
