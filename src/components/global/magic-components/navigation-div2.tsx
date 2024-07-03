'use S'
import { booking, fastTravel, nearbyPlanet, rating, search, spaceDiv, topNavigation } from '@/lib/constants';
import Image from 'next/image';
import React, { useState } from 'react'

const NavigatioScreen = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className='w-[230px] h-[430px] bg-transparent overflow-hidden rounded-[18px] border-[#2d2d2d] border-[1px] box-shadow flex flex-col items-center '>
            <div className="w-full flex justify-center items-center">
                <Image src={topNavigation} width={228} height={34} alt='navigation-bar' />
            </div>
            <div className="w-[95%] h-8  border-screen-border border rounded-3xl flex justify-start items-center">
                <Image src={search} width={15} height={15} alt='search' className='ml-2' />
                <p className=' font-satoshi-regular text-xs ml-4 mt-[1px]'>The Comets</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full" >
                <div className="flex justify-between  px-2 pt-3 border-[#2d2d2d] border-b-[1px] w-full">
                    {spaceDiv.map((items, idx) => (
                        <div className="cursor-pointer w-[48px] h-[48px] flex flex-col justify-center items-center gap-1 " key={idx} onClick={() => setIndex(idx)}>
                            <Image src={items.icon} width={20} height={20} alt={items.lable} className=' align-top' />
                            <p className=' font-satoshi-regular text-[10px]'>{items.lable}</p>
                            <div className={`${index === idx ? 'w-[32px] h-[4px] bg-[#7440df] rounded-[20px]' : 'hidden'}`} />
                        </div>
                    ))}
                </div>
                <div className="w-full h-[180px] mt-3  no-scrollbar">
                    <div className="w-full h-[300px] flex flex-col justify-center overflow-y-scroll  items-center px-3 relative no-scrollbar">
                        {spaceDiv[index].products.map((items) => (
                            <div className="w-full flex flex-col pt-4  " key={items.title}>
                                <Image src={items.background} width={204} height={80} alt={items.title} key={items.title} className="rounded-md mt-4 opacity-65" />
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

export const NavigatioScreen2 = () => {
    return (
        <div className="w-[230px] h-[300px] bg-transparent rounded-[18px] border-[#2d2d2d] border-[1px] px-4 box-shadow flex flex-col items-center ">
            <div className="w-full flex justify-between h-[82px] mt-[1px]  border-b border-b-screen-border">
                <div className="flex flex-col justify-center items-start mt-1">
                    <p className='font-satoshi-bold mb-[5px] text-[20px] text-secondary'>Figma AI</p>
                    <p className='text-secondary font-satoshi-regular text-[12px] -mt-1'>Figma Galexy</p>
                </div>
                <div className="flex flex-col mt-0.5 justify-center items-start">
                    <div className="flex mb-[5px] gap-2 justify-center items-center">
                        <Image src={rating} width={12} height={12} alt='star-rating' className=' text-screen-border -mt-[5px]' />
                        <p className=' font-satoshi-regular text-[14px] text-secondary'>5.0</p>
                    </div>
                    <p className='font-satoshi-regular text-[10px] text-[#EEEEEE]'> </p>
                </div>
            </div>

            <div className="w-full h-32 border-b border-b-screen-border overflow-hidden">
                <h1 className='w-full font-satoshi-bold text-[20px] text-secondary mt-1 '>Amenities</h1>
                <div className="flex justify-center items-center flex-col w-full h-full overflow-hidden ">
                    <div className="w-full h-full flex items-center gap-4">
                        <Image src={nearbyPlanet}  width={24} height={24} alt='SVG' />
                        <p className=' font-satoshi-regular text-secondary text-sm'>Nearby Planets</p>
                    </div>
                    <div className="w-full h-full flex items-center gap-4">
                        <Image src={fastTravel}  width={24} height={24} alt='SVG' />
                        <p className=' font-satoshi-regular text-secondary text-sm'>Fast Travel </p>
                    </div>
                    <div className="w-full h-full flex items-center gap-4">
                        <Image src={booking}  width={24} height={24} alt='SVG' />
                        <p className=' font-satoshi-regular text-secondary text-sm'>Super Fast</p>
                    </div>
                </div>
            </div>

            <button className="w-[95%] h-10 opacity-90 rounded-full bg-[#A2A6FD] mt-2 text-black font-satoshi-bold flex justify-center items-center cursor-pointer">Confirm Booking</button>
        </div>
    )
}


export default NavigatioScreen