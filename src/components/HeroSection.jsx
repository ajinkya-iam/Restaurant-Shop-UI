import React from 'react'
import hero from "../images/hero.png"
import kababs from "../images/kababs.png"

const HeroSection = () => {
  return (
    <div className='flex w-full max-w-[1080px] h-screen mx-auto justify-between items-center'>

        <div className='w-[559px] h-[698px]'>
            <h1 className='font-sans uppercase font-medium text-red-600'>Now taking online ordres</h1>
            <img src={kababs} className='w-[469px] h-[100px] mt-4'/>
            <p className='text-slate-800 mt-4 w-[476px]'>Restaurant style Yogurt Mint Sauce is delicious dip which is quick and easy to ... This is a standard Indian mint chutney served with poppadums along with mint and lemon.</p>
        </div>

        <img className='md:-z-10 w-[800px] h-[850px] -mt-96 object-contain' src={hero}/>

    </div>
  )
}

export default HeroSection