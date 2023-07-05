import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <div className='flex w-full max-w-[1080px] h-[96px] mx-auto justify-between items-center'>
                <h1 className='ml-4 font-sans font-semibold text-slate-900 text-xl underline'>yannal</h1>
                <ul className='hidden md:flex space-x-10 items-center'>
                    <li className='font-sans font-medium text-slate-600 hover:underline hover:underline-offset-2 hover:text-red-600'>about us</li>
                    <li className='font-sans font-medium text-slate-600 hover:underline hover:underline-offset-2 hover:text-red-600'>menu</li>
                    <li className='font-sans font-medium text-slate-600 hover:underline hover:underline-offset-2 hover:text-red-600'>our specials</li>
                    <li className='font-sans font-medium text-slate-600 hover:underline hover:underline-offset-2 hover:text-red-600'>our locations</li>
                    <li className='font-sans font-medium text-slate-600 hover:underline hover:underline-offset-2 hover:text-red-600'>our clients</li>
                    <li className='font-sans font-medium text-slate-600 hover:underline hover:underline-offset-2 hover:text-red-600'>login</li>
                </ul>
                <div onClick={()=>setOpenMenu(!openMenu)} className="block md:hidden mr-6">
                    {openMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                {
                    openMenu && (
                        <div className='fixed w-[60%] bg-white top-10 '>
                            <h1 className='ml-4 font-sans font-semibold text-slate-900 underline'>yannal</h1>
                            <ul className='ml-4 mt-4 space-y-4'>
                                <li className='font-sans font-medium text-slate-600 border-b-[0.3px] border-gray-400'>about us</li>
                                <li className='font-sans font-medium text-slate-600 border-b-[0.3px] border-gray-400'>menu</li>
                                <li className='font-sans font-medium text-slate-600 border-b-[0.3px] border-gray-400'>our specials</li>
                                <li className='font-sans font-medium text-slate-600 border-b-[0.3px] border-gray-400'>our locations</li>
                                <li className='font-sans font-medium text-slate-600 border-b-[0.3px] border-gray-400'>our clients</li>
                                <li className='font-sans font-medium text-slate-600 border-b-[0.3px] border-gray-400'>login</li>
                            </ul>
                        </div>
                    )
                }
            </div>


        </>
    )
}

export default Navbar