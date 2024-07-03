'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';


const HighlightedCSSCode = () => {

  const ref = useRef(null)

  const isInView = useInView(ref, { once: true })

  const codeString = `
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.screen {
  width: 15rem; 
  height: 235px;
  background-color: transparent;
  margin-left: 20px;
  border: 1px solid #d1d5db; 
  border-radius: 16px;
  overflow: hidden;
  position: relative;
}

.item1, .item2, .item3, .item4, .item5, .item6 {
  background-color: #d1d5db; 
  border: 1px solid #d1d5db; 
}
`;

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedText(codeString);
    }, 1000); // Write all text in 8 seconds

    return () => clearTimeout(timeout);
  }, [codeString]);

  return (
    <div className="w-full h-full flex justify-start gap-20 items-center relative overflow-y-scroll ">
      <div className="w-full h-full bg-transparent  rounded-lg overflow-y-scroll no-scrollbar relative ">
        <pre className="typewriter font-satoshi-regular bg-transparent w-full h-full opacity-55">
         
          <TextGenerateEffect words={codeString} />
        </pre>
      </div>
    </div>
  );
};

export default HighlightedCSSCode;
