'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@/component/Card'
import SchoolSearch from '@/component/SchoolSearch'
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast'
import { useSchoolContext } from '@/schoolContext/SchoolContext'

const page = () => {
 const{schools, setSchools} = useSchoolContext()

  const allSchools = async() => {
    try{
      const response =  await axios.get("/api/school")
      const data = response.data
      if(data.success){
        setSchools(data.schools)
      }
    }catch(error){
      toast.error("error.response.message")
      console.log(error)
    }
  }


  useEffect(() => {
    allSchools()
  }, [])

  return (
    <>
    <div className='my-5 py-5 md:mx-[100px] '>
       <Toaster position="top-right" reverseOrder={false} />

      <SchoolSearch/>

    <div className='py-[50px] mx-[14px] px-[50px] md:my-[200px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid gap-x-16 md:shadow-xl/30'>
        {
          schools&&
          schools.map((school)=>(
            <Card key={school.id} name={school.school_name} image={school.image} city={school.city} address={school.address} />
          ))
        }
    </div>
    </div>
    </>
  )
}

export default page