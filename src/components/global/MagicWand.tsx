import React, { HtmlHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'
import Image from 'next/image'
import { beam } from '@/lib/constants'





const magicWandVarients = cva(
  'rounded-l-[8px] bg-bg-wand relative',
  {
    variants: {
      variant: {
        vertical: '-rotate-90 w-[530px] h-[56px] mt-40 ',

        horizontal: 'z-30 w-[300px] h-[46px] md:w-[520px] md:h-[56px] mt-10 '
      },
      glow: {
        light: ''
      }
    },
    defaultVariants: {
      variant: "vertical",
    },
  }
)

interface wandProps extends HtmlHTMLAttributes<HTMLDivElement>, VariantProps<typeof magicWandVarients> { }

const MagicWand = ({ className, variant }: wandProps) => {

  return (
    <div className={cn(magicWandVarients({ variant }))}    >
        <Image src={beam} width={100} height={106} alt='beam' className={`${variant == 'vertical' ? 'absolute -right-10 -top-[83px] rotate-90  ' : 'hidden'}`} id='beam' />

      <div className="wand-streak absolute w-[430px] h-1 top-[50%] bottom-[50%] -translate-y-1/2 z-40" ></div>
      <div className="absolute bg-wand-cap w-[100px] md:w-[120px] h-full right-0 rounded-r-[14px] z-30"></div>
    </div>
  )
}


export default MagicWand





