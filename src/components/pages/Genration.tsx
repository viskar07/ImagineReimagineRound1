import React from 'react'
import EmojiComponents from '../global/grid-animation/div2-i'
import GerateComponents from '../global/grid-animation/div2-ii'
import Heading from '../global/grid-animation/grid-info'

const Generation = () => {
    return (

        <div className="w-full flex flex-col items-center justify-center mt-[150px] " id='feature'>
            <div className="relative flex flex-col justify-center items-center z-0">
                {/* <div className="z-0 w-[540px] h-[290px]" /> */}
                <h1 className='z-30 text-[48px] md:text-[80px] font-[700] font-satoshi-bold tracking-tightest text-center text-transparent custom-gradient-text'>
                Features

                </h1>
                <p className='text-base md:text-[22px] text-center my-2 text-secondary font-satoshi-medium font-medium z-30'>
              AI  functionalities integrated into Figma.        </p>
            </div>


            <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-row-2  xl:grid-cols-4 xl:grid-rows-2   gap-3 sm:m-20   m-2 ">

                <div className="box-outlate  w-[300px] sm:w-[612px]  col-span-2 relative" >
                    <Heading heading='AI models made for designers' description='Figma AI model use the latest LLMs,Diffusion models and creative programming . ' />
                    <EmojiComponents />
                </div>

                <div className="box-outlate w-[300px] sm:w-[612px] col-span-2 relative" >
                    <Heading heading='Generate what you want' description='Generate design assets anywhere from web.' />
                    <GerateComponents />
                </div>

            </div>
        </div>
    )
}

export default Generation