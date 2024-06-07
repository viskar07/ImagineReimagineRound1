'use client'
import { magicDiv, rating, topNavigation } from '@/lib/constants'
import Image from 'next/image'
import React, { useState } from 'react'

const Navigation = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className='w-[230px] h-[500px] bg-[#1b1b1e] rounded-[18px] border-[#2d2d2d] border-[1px] box-shadow'>
            <div className="w-full flex justify-center items-center">
                <Image src={topNavigation} width={228} height={34} alt='navigation-bar' />
            </div>

            <div className="flex flex-col justify-center items-center w-full" >
                <div className="flex justify-between  px-2 pt-3 border-[#2d2d2d] border-b-[1px] w-full">
                    {magicDiv.map((items, idx) => (
                        <div className="cursor-pointer w-[48px] h-[48px] flex flex-col justify-center items-center gap-1 " key={idx} onClick={() => setIndex(idx)}>
                            <Image src={items.icon} width={20} height={20} alt={items.lable} className=' align-top' />
                            <p className=' font-satoshi-regular text-[10px]'>{items.lable}</p>
                            <div className={`${index === idx ? 'w-[32px] h-[4px] bg-[#7440df] rounded-[20px]' : 'hidden'}`} />
                        </div>
                    ))}
                </div>
                <div className="w-full h-[150px] overflow-y-scroll no-scrollbar">
                    <div className="w-full h-[300px] flex flex-col justify-center items-center px-3 relative no-scrollbar">
                        {magicDiv[index].products.map((items) => (
                            <div className="w-full flex flex-col pt-4 " key={items.title}>
                                <Image src={items.background} width={204} height={80} alt={items.title} key={items.title} className="rounded-md" />
                                <div className="w-full flex justify-between h-[32px] mt-[12px]">
                                    <div className="flex flex-col justify-center items-start mt-1">
                                        <p className='font-satoshi-medium mb-[5px] text-[12px] text-primary'>{items.title}</p>
                                        <p className='text-secondary font-satoshi-regular text-[12px] -mt-1'>Figma</p>
                                    </div>
                                    <div className="flex flex-col mt-0.5 justify-center items-start">
                                        <div className="flex mb-[5px] gap-0.5">
                                            <Image src={rating} width={8} height={8} alt='star-rating' className=' text-secondary' />
                                            <p className=' font-satoshi-regular text-[10px] text-secondary'>{items.rating}</p>
                                        </div>
                                        <p className='font-satoshi-regular text-[10px] text-[#EEEEEE]'> &#36; {items.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navigation

// .magic-app-screen {
// z-index: 20;
// width: 230px;
// height: 500px;
// min-height: 500px;
// background-color: #1b1b1e;
// border: 1px solid #2d2d2d;
// border-radius: 18px;
// position: absolute;
// top: 151px;
// left: 25px;
// box-shadow: 0 2px 22px rgba(0, 0, 0, .3);
