'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

const AddSchool = () => {

  const [file, setFile] = useState(null);
  const router = useRouter();

  const [schoolInfo, setSchoolInfo] = useState({
    school_name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email_id: ""
  });

  const handlingUpload = (event) => {
    setFile(event.target.files[0])
  };

  const handlingChange = (event) => {
    setSchoolInfo(prevInfo => ({ ...prevInfo, [event.target.name]: event.target.value }))
  };


  const handlingSubmit = async (event) => {
    event.preventDefault();
    try {

      if (!file) return "please upload image"
      const formData = new FormData()
      formData.append("image", file)
      formData.append("schoolInfo", JSON.stringify(schoolInfo))



      const response = await axios.post('/api/school', formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })

      if (data.success) {
        router.push('/')
      }

      setSchoolInfo({
        school_name: "",
        address: "",
        city: "",
        state: "",
        contact: "",
        email_id: ""
      })

      setFile(null)

    } catch (error) {
      console.log("error in add school: " + error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handlingSubmit} className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-700 text-center">School Registration Form</h2>

        {/*  Sl Name */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">School Name</label>
          <input onChange={handlingChange} value={schoolInfo.school_name} type="text" name='school_name' placeholder="Enter school name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        {/* <!ddress */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">Address</label>
          <input onChange={handlingChange} value={schoolInfo.address} type="text" name='address' placeholder="Enter address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        {/*  Ci State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-2">City</label>
            <input onChange={handlingChange} value={schoolInfo.city} type="text" name='city' placeholder="Enter city"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">State</label>
            <input onChange={handlingChange} value={schoolInfo.state} type="text" name='state' placeholder="Enter state"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
        </div>

        {/*  Conta Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium mb-2">Contact Number</label>
            <input onChange={handlingChange} value={schoolInfo.contact} type="number" name='contact' placeholder="Enter contact number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Email ID</label>
            <input onChange={handlingChange} value={schoolInfo.email_id} type="email" name='email_id' placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
        </div>

        {/*  Image */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">Upload School Image</label>
          <input onChange={handlingUpload} type="file" name='image' accept="image/*"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
           file:mr-4 file:py-2 file:px-4
           file:rounded-lg file:border-0 file:text-sm file:font-semibold
           file:bg-blue-600 file:text-white 
           hover:file:bg-blue-700 focus:outline-none" />
        </div>


        {/* Submit Button*/}
        <div className="text-center">
          <button type="submit"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>

  )
}

export default AddSchool