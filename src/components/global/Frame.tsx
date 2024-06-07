import React from 'react';
import Image from 'next/image';
import { hash } from '@/lib/constants';

interface Frame  {
  title:string, 
  subtitle:string
  className?: string,
  state:boolean,
}


const Frame:React.FC<Frame> = ({ title, subtitle,className,state }) => (
  <div className={`w-full h-16 flex gap-2 hover:bg-[#3e3d42] transition-colors ${className}`}>
    <Image src={hash} width={50} height={50} alt="hash" />
    <div className="flex justify-center items-center w-40 h-10 overflow-hidden relative">
      <p className={`font-satoshi-regular text-lg absolute  ${state ? '-top-8':'top-4'} transition duration-500 `}>{title}</p>
      <p className={`font-satoshi-regular absolute -bottom-5  ${state ? ' top-5':'-bottom-5'} z-[100] transition duration-500`}>{subtitle}</p>
    </div>
  </div>
);

export default Frame;
