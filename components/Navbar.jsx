import React from 'react'
export default function Navbar() {
  return (
    <>
        <div className=' w-full h-auton bg-teal-700'> 
            <nav className='flex items-center justify-between px-8 pl-6 pr-6'>
                <h2 className='text-3xl text-white'>LOGOO</h2>
                <ul className='flex justify-between items-center w-full'>
                    <div className='flex justify-between'>
                    <li className='block px-4 cursor-pointer text-white'>Home</li>
                    <li className='block px-4 cursor-pointer text-white' >Cart</li>
                    </div>
                    <div className='flex'>
                    <li className='block px-4 cursor-pointer text-white' >Login</li>
                    <li className='block px-4 cursor-pointer text-white' >LogOut</li>
                    </div>
                </ul>
            </nav>
        </div>
    </>
  )
}
