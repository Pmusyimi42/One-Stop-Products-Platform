import React from 'react'
import { Outlet } from 'react-router-dom'
// import Home from '../Home'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className='flex flex-row bg-zinc-300 h-screen w-screen overflow-auto'>
      <Sidebar />
          <div className='p-4'>
            <div className='bg-teal-200'>header</div>
            <div>
              <Outlet />
            </div>   
        </div>
    </div>
  )
}

export default Layout