import { footer, footerLogo, socialMedia } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

const test = () => {
  return (
    <div className='w-full h-full relative'>
      <div className="w-full h-[300px] flex flex-col md:flex-row gap-10 mb-20 px-10">

        <div className="w-[700px] h-[118px] mr-10 ">
          <p className='font-satoshi-medium text-[16px] mb-4'>Figma AI</p>
          <p className='font-satoshi-medium text-[16px] mb-5 w-full text-[#a9a9a9]'>Design tools from the future.</p>
          <button className='custom-button hover:border-white'>Join the future</button>
        </div>

        <div className="w-screen flex h-40 mb-10">
        {footer.map((product, inx) => (
          <div className="sm:w-[70%] w-full flex justify-start flex-col " key={inx}>
            <p className=' font-satoshi-medium text-[16px]  font-medium mb-4'>{product.lable}</p>
            {product.item.map((product) => (
              <p className='font-satoshi-medium text-[16px] text-[#a9a9a9] hover:text-white cursor-pointer mb-4' key={product}>{product}</p>
            ))}

          </div>
        ))}
        </div>
      </div>

      <Image src={footerLogo} width={500} height={500} alt='f0oter' className='absolute rotate-180 top-32 -left-72' />
      <div className="flex w-full justify-center items-center px-10 mb-8 ">
        <p className='font-satoshi-medium ml-10 text-[16px] text-[#a9a9a9] w-full  text-left'>©2024 Figma Technologies, Inc.</p>
        <div className="flex justify-center  items-center w-60 gap-3">
          {socialMedia.map((icon, index) => (
            <Image src={icon} width={30} height={30} alt='icons' key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default test


