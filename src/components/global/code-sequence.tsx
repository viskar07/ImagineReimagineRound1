import React from 'react'
import HighlightedCSSCode from './magic-components/CodeType'

const CodeSequence = () => {
  return (
    <div className="w-full h-full flex justify-start gap-20 items-center relative overflow-hidden">
      <div className="w-60 h-[235px] bg-transperent ml-20 border-screen-border border rounded-[16px] overflow-hidden relative">

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

      </div>

      <div className="w-[400px] h-[90%] flex flex-col bg-transperent border border-screen-border rounded-[16px] absolute right-10 overflow-hidden" >
        <div className="w-full h-8 border-b-screen-border border-b ">
          <div className="w-full h-full ml-2  flex justify-between items-center p-1">
          <p className=' font-satoshi-bold  opacity-70'>CSS</p>


            <div className="flex justify-between items-center w-16 mr-2 h-full">
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
              <div className="w-[14px] h-[14px] rounded-full border-screen-border border bg-transparent"></div>
            </div>

          </div>
        </div>
        <div className="w-full h-full p-2">
          <HighlightedCSSCode />
        </div>
      </div>
    </div>
  )
}

export default CodeSequence



