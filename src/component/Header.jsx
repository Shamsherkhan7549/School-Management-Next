'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const [menu, setMenu] = useState(false);

    const handlingMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className=' sticky top-0 z-50 bg-[#144c7dd4] h-[80px] flex items-center justify-between px-3 w-[100%]'>
            <Image priority={true} src="/small_logo.png" alt="Logo" width={100} height={100} />


            <ul className='flex invisible md:visible space-x-4 text-white font-semibold  '>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/school/add"}>Add School</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>

            <Image onClick={handlingMenu} className='md:hidden block cursor-pointer' src="/menu-white.svg" height={30} width={30} alt='menu-icon' />


            <ul className={`absolute z-50 top-[80px] right-0 w-[250px] h-[230px] 
              flex flex-col justify-around px-[50px] space-x-4 
              bg-[#144c7dd4] text-white
              transition-transform duration-500 ease-in-out
              ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
                <Image onClick={handlingMenu} className='position absolute top-2 left-3' src="/cross-white.svg" height={20} width={20} alt='cross icon' />

                <li className='border border-gray-30 rounded px-[15px] py-2 cursor-pointer' >
                    <Link href={"/"}>Home</Link>
                </li>
                <li className='border border-gray-30 rounded px-[15px] py-2 cursor-pointer'>
                    <Link href={"/school/add"}>Add School</Link>
                </li>
                <li className='border border-gray-30 rounded px-[15px] py-2 cursor-pointer'>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header