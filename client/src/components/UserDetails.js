import React from 'react'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'

function UserDetails() {
  return (
    <div className='bg-zinc-300 mx-auto p-5 min-h-[80vh]'>
      <h1 className='mx-auto mt-2 text-3xl font-bold'>Add New Product</h1>
      <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col bg-zinc-200 shadow-xl min-h-[80vh]'>
          <p className='mx-auto mt-2 text-sm'>Base information</p>
          <h1 className='text-bold mx-auto mt-5 text-lg font-semibold'>Name</h1>
          <input type='text' className='mx-auto mt-3 rounded-lg shadow-xl'/>
          <h1 className='text-bold mx-auto mt-4 text-lg font-semibold'>Description</h1>
          <textarea type='text' className='mx-auto mt-3 rounded-lg shadow-xl min-h-[10vh]'/>
          <h1 className='text-bold mx-auto mt-6 text-lg font-semibold'>Image</h1>
          <input type="file" className="mx-auto mt-4 text-sm text-black
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-zinc-300 file:text-white
            hover:file:bg-red-600 "
          />
          <h1 className='text-bold mx-auto mt-6 text-lg font-semibold'>Price</h1>
          <input className='mx-auto mt-3 rounded-lg shadow-xl' placeholder=' $' type="number" min="0" step="1"/>
          <button className='mx-auto mt-4 bg-red-600 rounded-lg text-white font-semibold text-lg shadow-xl'>Preview</button>
        </div>
        <div className='bg-zinc-200 shadow-xl min-h-[60vh]'>
          <h1 className='mx-auto mt'>Preview</h1>
        </div>
        
      </div>

     
    </div>
  )
}

export default UserDetails