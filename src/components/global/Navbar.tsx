'use client'
import { figmaIcon, figmaSvg, navItems } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {motion, useAnimate} from 'framer-motion'
const Navbar = () => {


    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <nav className="w-full absolute top-0">
            {/* <motion.div>h1</motion.div>  */}
            {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        </nav>
    )
}

export default Navbar






const MobileNavbar = () => {
    return (
        <div className='w-full h-12 flex justify-center md:hidden'>
            <div className="w-[90%] h-full px-1.5 mt-4 flex justify-between items-center backdrop-blur-[16px] bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.08)] border rounded-[34px] md:hidden">

                <div className="px-1 flex justify-center items-center " >
                    <Link href="#hero" className='flex justify-center items-center gap-2'>
                    <Image src={figmaSvg} width={15} height={15} alt='logo' />
                    <p className=' font-satoshi-medium text-xl'>Figma</p>
                    </Link>
                </div>

                <div className="backdrop-blur-[16px] hover:border-white text-white bg-white/10 border border-white/10 rounded-[34px] flex items-center py-1.5 px-4 font-normal leading-[24px] no-underline transition-colors duration-200">
                    Login
                </div>

            </div>
        </div>
    )
}


const DesktopNavbar = () => {
    
    const [scope,animate]=useAnimate();
  useEffect(()=>{
    const animationSeq = async () =>{

       animate(scope.current, {opacity:1} ,{duration:1,type:'spring' ,ease:'easeInOut'})
    }
    animationSeq()
  },[animate])

    return (
        <div className="  opacity-0 w-full h-[56px] hidden md:flex justify-between items-center px-10 py-2  " ref={scope}>
            {/* Logo  */}
            <div className="flex justify-center items-center" >
                <Link href="#hero" className='flex justify-center items-center gap-2'>
                    <Image src={figmaSvg} width={15} height={15} alt='logo' />
                    <p className=' font-satoshi-medium text-xl'>Figma</p>
                </Link>
            </div>

            <div className="flex justify-evenly items-center list-none gap-8  font-satoshi text-[16px] ">
                {navItems.map((items, index) => (
                    <Link href={items.link} key={index}>{items.lable}</Link>
                ))}
            </div>
            <div className="backdrop-blur-[16px] hover:border-white text-white bg-white/10 border border-white/10 rounded-[32px] flex items-center py-1.5 px-4 font-normal leading-[24px] no-underline transition-colors duration-200">
                Login
            </div>
        </div>
    )
}