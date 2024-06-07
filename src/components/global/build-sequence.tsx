'use client'
import React from 'react'

const BuildSequence = () => {

  return (
    <div className='w-full h-full flex justify-center items-center relative '>

        <div className="w-60 h-[512px] bg-bg-screen-component border-screen-border border rounded-[16px] overflow-hidden relative">

            <div className="item1 w-[104px] h-[18px] absolute top-4 left-4 bg-screen-item border-screen-border border rounded-[6px]"></div>
            <div className="item2 w-7 h-7 absolute top-4 right-2 bg-screen-item border-screen-border border rounded-full"></div>

            <div className="item3 w-[72px] h-[72px] absolute top-16 left-4 bg-screen-item border-screen-border border rounded-[12px]"></div>
            <div className="item4 w-[88px] h-[18px] absolute top-[75px] right-10 bg-screen-item border-screen-border border rounded-[6px]"></div>
            <div className="item5 w-[64px] h-[6px] absolute top-[100px] right-16 bg-screen-item rounded-[6px]"></div>
            <div className="item6 w-[48px] h-[6px] absolute top-[112px] right-20 bg-screen-item rounded-[6px]"></div>

            <div className="item3 w-[72px] h-[72px] absolute top-36 left-4 bg-screen-item border-screen-border border rounded-[12px]"></div>
            <div className="item4 w-[88px] h-[18px] absolute top-[150px] right-10 bg-screen-item border-screen-border border rounded-[6px]"></div>
            <div className="item5 w-[64px] h-[6px] absolute top-[175px] right-16 bg-screen-item rounded-[6px]"></div>
            <div className="item6 w-[48px] h-[6px] absolute top-[187px] right-20 bg-screen-item rounded-[6px]"></div>
           
           
            <div className="item10 w-[60px] h-[18px] top-[240px] left-4 absolute bg-screen-item border-screen-border border rounded-[6px]"></div>

            <div className="item10 w-[120px] h-[120px] top-[270px] left-4 top absolute bg-screen-item border-screen-border border rounded-[6px]"></div>
            <div className="item10 w-[120px] h-[120px] top-[270px] left-36 absolute bg-screen-item border-screen-border border rounded-[6px]"></div>

            <div className="item10 w-[200px] h-[60px] top-[430px] left-5 absolute bg-screen-item border-screen-border border rounded-[6px]"></div> 


        </div>

    </div>
  )
}

export default BuildSequence

