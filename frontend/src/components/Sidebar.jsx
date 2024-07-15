import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from './OtherUsers';
import axios from 'axios'
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';


const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/user/logout`);
      navigate('/login');
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <div className='border-r flex flex-col p-4 border-slate-900'>
        
          <form action="" className='flex items-center gap-2'>
              <input type="text" placeholder='Search...'className='input input-bordered rounded-md bg-white text-black hover:bg-white' />
              <button type='submit' className='btn bg-white text-black hover:bg-violet-200'>
              <IoSearchSharp/>
              </button>
          </form>
          
          <hr className="border-b border-gray-500 mt-2 w-full"></hr>
          <OtherUsers/>
          <div >
            <button className='p-2 rounded-lg bg-white text-black hover:bg-violet-500 hover:text-white' onClick={handleLogout} >Logout</button>
          </div>
      </div>
  )
}
export default Sidebar