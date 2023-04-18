import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-color1 pt-4 pb-4 pl-6 pr-6 flex justify-between'>
      <div></div>
      <div className='flex text-white space-x-3 font-[14px]'>
        <p className='self-center'>User name</p>
        <button className='border border-white rounded-md pt-2 pb-2 pl-4 pr-4'>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar