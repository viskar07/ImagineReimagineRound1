import Container from '@/components/pages/Container'
import Generation from '@/components/pages/Genration'
import Hero from '@/components/pages/Hero'
import Magician from '@/components/pages/Magician'
import Pricing from '@/components/pages/Pricing'
import Collaborator from '@/components/pages/collaborator'
import Test from '@/components/pages/test'
import React from 'react'

const Home = () => {
  return (
    <div className="bg-background-star bg-contain h-full overflow-hidden  ">
      <Hero />
      <Magician />
      <Container />
      <Generation />
      <Pricing />
      <Collaborator />
      <Test />

    </div>
      
    
    
    
  )
}

export default Home