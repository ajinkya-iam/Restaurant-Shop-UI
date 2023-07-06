import React from 'react'
import hero from "../images/hero.png"
import kababs from "../images/kababs.png"
import add_cart_btn from "../images/add_to_cart.png"
import book__table_btn from "../images/book_a_table.png"


const HeroSection = () => {
  return (
    <div className='flex w-full max-w-[1080px] mx-auto justify-between items-center'>
        <div className='flex flex-col w-full max-w-[561px] space-y-10 justify-center mt-24'>
            <h1 className='text-lg font-medium uppercase text-red-500 leading-7 tracking-[0.96px]'>Now taking online ordres</h1>
            <img src={kababs} className='w-full'/>
            <p className='font-medium text-lg text-[#2A333E]'>Restaurant style Yogurt Mint Sauce is delicious dip which is quick and easy to ... This is a standard Indian mint chutney served with poppadums along with mint and lemon.</p>
            <div className='flex justify-between mx-auto w-full -ml-16'>
                <img className='w-[250px]' src={add_cart_btn}/>
                <img className='w-[250px]' src={book__table_btn}/>
            </div>
        </div>
        <img src={hero} className='-z-10 w-full max-w-[670px] h-[600px] object-contain'/>
    </div>
  )
}

export default HeroSection