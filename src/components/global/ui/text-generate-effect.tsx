"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const delay = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const manageAnimation = async() => {

      if (isInView) {
        await delay(10000);
  
        animate(
          "span",
          { opacity: 1 },
          { duration: 2, delay: stagger(0.2) }
        );
      }
    }
    manageAnimation()
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)} ref={ref}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-sm leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
