'use client'
import React, { useEffect } from 'react'
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';
import NavigatioScreen, { NavigatioScreen2 } from './magic-components/navigation-div2';
import { useAnimate } from 'framer-motion';

const SearchSequence = () => {
  const [scope,animate] = useAnimate();

  useEffect(()=>{
   const manageAnimation = async() =>{

    await (animate('.navigation',{y:[-1000,0],opacity:1},{ duration: 1, ease: 'easeInOut', type: 'spring', delay:4}),
          animate('.navigation2',{y:[1000,0],opacity:1},{ duration: 1, ease: 'easeInOut', type: 'spring',delay:4 }))
    await (animate('.navigation',{x:[0,-1000],opacity:1},{ duration: 1, ease: 'easeInOut', type: 'spring',delay:4 }),
          animate('.navigation2',{x:[0,1000],opacity:1},{ duration: 1, ease: 'easeInOut', type: 'spring',delay:4 }))


    await animate('.htext',{y:[-2,0] ,opacity:1},{ duration: 1, ease: 'easeInOut', type: 'spring' })
    await animate('#searchbar',{y:[-10,0] ,opacity:1},{ duration: 1, ease: 'easeInOut', type: 'spring' })
   }

     manageAnimation()
  },[animate])

  

  const placeholders = [
    "Create a Space navigation components..",
    "Build a user profile component.",
    "Create a modal with smooth transitions.",
    "Design a form with validation animations.",
    "Design a product card with hover animations."
   
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className={` flex justify-center flex-col items-center w-full h-full relative`} ref={scope}>
      <h1 className=' font-satoshi-medium text-4xl mb-10 -mt-20 text-screen-border opacity-0 htext'>Ask Anything</h1>
      <div className="w-full h-20 opacity-0" id='searchbar'>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
        
      />
      </div>
      <div className="absolute left-56 bottom-0 opacity-0 navigation">
        <NavigatioScreen />
      </div>
      <div className="absolute right-56 top-0 opacity-0 navigation2">
        <NavigatioScreen2 />
      </div>

    </div>
  )
}

export default SearchSequence