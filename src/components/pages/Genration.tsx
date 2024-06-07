import React from 'react'
import EmojiComponents from '../global/grid-animation/div2-i'
import GerateComponents from '../global/grid-animation/div2-ii'

const Generation = () => {
    return (

        <div className="w-full flex justify-center mt-[800px] ">
            <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-row-2  xl:grid-cols-4 xl:grid-rows-2  gap-3 m-20 -mt-[570px] ">

                <div className="box-outlate  w-[300px] sm:w-[612px] col-span-2 relative" >
                    <EmojiComponents />
                </div>

                <div className="box-outlate w-[300px] sm:w-[612px] col-span-2 relative" >
                    <GerateComponents />
                </div>

            </div>
        </div>
    )
}

export default Generation