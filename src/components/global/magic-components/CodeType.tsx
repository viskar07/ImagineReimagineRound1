'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HighlightedCSSCode = () => {
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
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {displayedText.split('').map((char, index) => {
              const isSelector = char === '.' && codeString[index - 1] === '\n';
              const isBracket = char === '{' || char === '}';
              return (
                <motion.span
                  key={index}
                  className={
                    isSelector ? 'selector-highlight' :
                      isBracket ? 'bracket-highlight' :
                        char === '#' ? 'hex-highlight' :
                          ''
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: index * 0.01 }} // Staggered animation
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        </pre>
      </div>
    </div>
  );
};

export default HighlightedCSSCode;
