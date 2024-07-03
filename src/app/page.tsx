'use client'
import Container from '@/components/pages/Container'
import Generation from '@/components/pages/Genration'
import Hero from '@/components/pages/Hero'
import Magician from '@/components/pages/Magician'
import Pricing from '@/components/pages/Pricing'
import Test from '@/components/pages/test'
import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { LayoutGridDemo } from '@/components/pages/collaborator'
const Home = () => {





  return (
    <div className="bg-background-star bg-contain h-full overflow-hidden  ">
      <div className="w-full h-full absolute">

      </div>
      <Hero />
      <Magician />
      <Container />
      <Generation />
      <LayoutGridDemo/>
      <Pricing />
      <Test />

    </div>




  )
}

export default Home