'use client'
import React from 'react'
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';
import NavigatioScreen, { NavigatioScreen2 } from './magic-components/navigation-div2';

const SearchSequence = () => {


  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className='flex justify-center flex-col items-center w-full h-full relative'>
      <h1 className=' font-satoshi-regular text-4xl mb-10 -mt-20 text-screen-border'>Ask Anything</h1>
      <div className="w-full h-20 ">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      </div>
      <div className="absolute left-56 -bottom-40">
        <NavigatioScreen />
      </div>
      <div className="absolute right-56 top-0">
        <NavigatioScreen2 />
      </div>

    </div>
  )
}

export default SearchSequence