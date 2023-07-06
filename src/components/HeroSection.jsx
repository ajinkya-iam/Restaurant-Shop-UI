import React from 'react'
import hero from "../images/hero.png"
import kababs from "../images/kababs.png"



const HeroSection = () => {
  return (
    <div className='flex w-full max-w-[1080px] h-screen mx-auto justify-between items-center'>
        <div className='flex flex-col w-full max-w-[561px]'>
            <h1 className='text-lg font-medium uppercase text-red-500 leading-7 tracking-[0.96px]'>Now taking online ordres</h1>
            <img src={kababs} className='w-full'/>
        </div>
        <img src={hero} className='w-full max-w-[670px] object-contain'/>
    </div>
  )
}

export default HeroSection