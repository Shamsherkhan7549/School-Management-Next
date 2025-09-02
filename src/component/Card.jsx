import React from 'react'
import Image from 'next/image'
const Card = ({ name, image, city, address }) => {
  return (
    <div className='size-70 h-[550px] w-[270px]   w-full  rounded-xl hover:rounded-none cursor-pointer'>

      <div className='w-full h-64 overflow-hidden  shadow-lg'>
        <img className='w-full h-full object-center transition-transform duration-500 hover:scale-110' src={image} alt="school_image" />

      </div>
      <div className=' px-5 py-5 h-[250px] flex flex-col border border-gray-300 rounded-b-xl relative'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-1'>
            <Image src={'/star.png'} height={15} width={15}  alt='rating'/>
            <Image src={'/star.png'} height={15} width={15} alt='rating'/>
            <Image src={'/star.png'} height={15} width={15} alt='rating'/>
            <Image src={'/star.png'} height={15} width={15} alt='rating'/>
          </div>
          <p className='text-base text-sky-500'>CBSE</p>
        </div>

        <p className='text-base text-sky-500 text-gray-500 py-2'>{city}</p>
        <h1 className='font-bold tex-lg text-lg py-3'>{name.length>40? name.substring(0,40)+"..." : name}</h1>
        <p className=' text-gray-500 ' >{address.length>25? address.substring(0,25)+"..." : address}</p>
        <button className="absolute bottom-0 left-0 w-full h-[50px] bg-green-600 text-white rounded-b-xl cursor-pointer">
         Apply now
        </button>
      </div>

      

    </div>
  )
}

export default Card