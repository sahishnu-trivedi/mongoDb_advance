import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center h-15 bg-gray-200 shadow px-5'>
        <div className='w-[10%] h-full flex items-center'>
            <h1 className='font-bold text-zinc-800 uppercase'>Logo</h1>
        </div>
        <div className='w-[50%] h-full'>
            <ul className='w-full h-full flex gap-6 list-none items-center text-zinc-800 font-medium'>
                <li> <a href='javascript:void(0)' className='uppercase'>Home</a> </li>
                <li> <a href='javascript:void(0)' className='uppercase'>About</a> </li>
                <li> <a href='javascript:void(0)' className='uppercase'>Contact</a> </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar