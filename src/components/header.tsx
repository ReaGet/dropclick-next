import React from 'react'
import UserNav from './user-nav'

const Header = () => {
  return (
    <header className='w-full _bg-[#0B0B0B]'>
      <div className='flex px-6 py-4 items-center'>
        <span className='mr-auto text-2xl text-primary uppercase'>
          Coca<span className='text-stone-800'>Cola</span>
        </span>
        <UserNav />
      </div>
    </header>
  )
}

export default Header