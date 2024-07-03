import { controlingIcon } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

const Controller = () => {
  return (
    <div className='w-48 mt-10 h-16 border flex justify-center items-center gap-3 border-screen-border rounded-full'>
      {controlingIcon.map((items, index) => (
        <button
          className="w-10 h-full cursor-pointer flex justify-center items-center"
          key={index}
        >
          <Image src={items} width={30} height={30} alt='Controlling Icon' />
        </button>
      ))}
    </div>
  )
}

export default Controller
