import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from './OtherUsers';



const Sidebar = () => {
  return (
      <div className='border-r flex flex-col p-4 border-slate-900'>
        
          <form action="" className='flex items-center gap-2'>
              <input type="text" placeholder='Search...'className='input input-bordered rounded-md bg-white text-black hover:bg-white' />
              <button type='submit' className='btn bg-white text-black hover:bg-violet-200'>
              <IoSearchSharp/>
              </button>
          </form>
          
          <hr class="border-b border-gray-500 mt-2 w-full"></hr>
          <OtherUsers/>
          <div >
            <button className='p-2 rounded-lg bg-white text-black hover:bg-violet-500 hover:text-white'>Logout</button>
          </div>
      </div>
  )
}
export default Sidebar