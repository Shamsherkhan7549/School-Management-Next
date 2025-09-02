import React from 'react'
import Image from 'next/image'

const SchoolSearch = () => {
    return (
        <div className='my-5 py-5 flex flex-col  justify-items-center text-center '>
            <h1 className='font-extrabold text-5xl text-center'>School Search</h1>
            <p className='text-gray-500 italic my-3 py-5'>Find the right school for your child.</p>
            <div className='xl:w-[60%] lg:w-[70%] md:w-[80%] w-[90%]  flex mx-auto h-[60px] justify-between '>
                <div className='h-full mx-auto flex space-between w-full border border-solid hover:border-black border-[3px] border-gray-500 rounded'>
                    <Image className='p-[12px]' src="/search-icon.svg" height={100} width={100} alt='search_icon' />
                    <input className='w-full h-full outline-none text-2xl md:px-5' type="text" />
                </div>
                <button className=' mx-3 bg-green-600 font-extrabold text-xl w-[120px] h-full text-[white] shadow rounded cursor-pointer'>Search</button>

            </div>
        </div>
    )
}

export default SchoolSearch