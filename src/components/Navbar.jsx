import React from 'react'
import { IoLogoWhatsapp,IoMdSearch  } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { SiWindows11 } from "react-icons/si";
function Navbar() {
  return (
    <div className='container py-2 grid mx-auto w-full'>
        <div className='flex font-semibold w-7/12 justify-self-end justify-between flex-end'>
        <div className='flex'>
             <IoCall className='text-xl mt-1' />
            <h1 className='ml-2'>+977 987763223</h1>
          </div>
          <div className='flex'>
             <IoLogoWhatsapp className='text-xl mt-1' />
            <h1 className='ml-2'>+977 987763223</h1>
          </div>
          <div className='flex'>
             <SiWindows11 className='text-lg mt-1' />
            <h1 className='ml-2'>Signup</h1>
          </div>
          <div className='flex'>
            <h1 className='ml-2'>Login</h1>
          </div>
          <div className='flex'>
            <h1 className='ml-2'>Contact Us</h1>
          </div>
          
            
        </div>


        <div className='flex pt-4 font-medium'>
          <div className='border w-2/12 flex justify-center py-1'>
          <img className='' src="https://www.y-axis.ae/assets/cms/2023-09/Y-Axis-Dubai.webp" alt="logo" />
          </div>
          <ul className='flex w-9/12'>
            <li className='border p-2 min-w-24 text-center border-b-orange-400 hover:text-white hover:bg-orange-400'>Free Assesement</li>
            <li className='border p-2 min-w-24 text-center border-b-purple-400 hover:text-white hover:bg-purple-400'>Migrate</li>
            <li className='border p-2 min-w-24 text-center border-b-blue-400 hover:text-white hover:bg-blue-400'>Work</li>
            <li className='border p-2 min-w-24 text-center border-b-yellow-400 hover:text-white hover:bg-yellow-400'>Study</li>
            <li className='border p-2 min-w-24 text-center border-b-gray-400 hover:text-white hover:bg-gray-400'>Visa</li>
            <li className='border p-2 min-w-24 text-center border-b-green-400 hover:text-white hover:bg-green-400'>Coaching</li>
            <li className='border p-2 min-w-24 text-center border-b-orange-400 hover:text-white hover:bg-orange-400'>Invest</li>
            <li className='border p-2 min-w-24 text-center border-b-red-400 hover:text-white hover:bg-red-400'>Legal</li>
            <li className='border p-2 min-w-24 text-center'><IoMdSearch className='text-3xl text-center'/></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar