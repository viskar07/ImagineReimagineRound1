'use client'
import { useGSAP } from '@gsap/react';
import React, { useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap, { Power1 } from 'gsap';

gsap.registerPlugin(ScrollTrigger);


const Slider = () => {

 
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % 7);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide) => (currentSlide - 1 + 7) % 7);
  };
  

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center bg-white'>
      <p className="text-4xl text-black">SPRING / SUMMER</p>
      <p className="text-4xl text-black">2024 Collection</p>
      <div className="w-full h-72 relative overflow-hidden">
        <div className="flex gap-2  w-full overflow-scroll "
        >
          {new Array(1, 2, 3,4, 5, 6, 7, 8).map((i, idx) => (
            <div className={`transform-animation min-w-40 h-72 bg-slate-600 transition-transform duration-1000 ease-in-out `} 
            key={idx}
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            
            >{i}</div>
          ))}
          
        </div>
        <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            onClick={prevSlide}
            disabled={currentSlide===0}

          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            onClick={nextSlide}
            disabled={currentSlide===4}

          >
            &#10095;
          </button>
      </div>
    </div>
  )
}

export default Slider