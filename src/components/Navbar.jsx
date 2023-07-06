import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import logo from "../images/logo.png"
import search from "../images/search.png"
import basket from "../images/basket.png"
import person from "../images/person.png"

const Navbar = () => {
    return (
        <div className='sticky top-0 flex w-full max-w-[1080px] h-[96px] mx-auto justify-between items-center'>
            <img src={logo} className='w-[113px] h-[33px] object-contain cursor-pointer' />
            <ul className='flex items-center space-x-8'>
                <div className='pb-1 hover:border-b-[3px] hover:border-red-500 cursor-pointer'><li className='font-sans font-medium text-slate-600 leading-6'>menu</li></div>
                <div className='pb-1 hover:border-b-[3px] hover:border-red-500 cursor-pointer'><li className='font-sans font-medium text-slate-600 leading-6'>about us</li></div>
                <div className='pb-1 hover:border-b-[3px] hover:border-red-500 cursor-pointer'><li className='font-sans font-medium text-slate-600 leading-6'>our specials</li></div>
                <div className='pb-1 hover:border-b-[3px] hover:border-red-500 cursor-pointer'><li className='font-sans font-medium text-slate-600 leading-6'>our locations</li></div>
                <div className='pb-1 hover:border-b-[3px] hover:border-red-500 cursor-pointer'><li className='font-sans font-medium text-slate-600 leading-6'>our cheffs</li></div>
            </ul>
            <div className='flex space-x-6'>
                <div className='p-2 hover:bg-slate-100 rounded-md cursor-pointer'>
                    <img src={search} className='w-6 h-6' />
                </div>
                <div className='p-2 hover:bg-slate-100 rounded-md cursor-pointer'>
                    <img src={basket} className='w-6 h-6' />
                </div>
                <div className='p-2 hover:bg-slate-100 rounded-md cursor-pointer'>
                    <img src={person} className='w-6 h-6' />
                </div>
            </div>
        </div>
    )
}

export default Navbar