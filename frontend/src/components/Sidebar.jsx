import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from './OtherUsers';
import axios from 'axios'
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';
import useGetOtherUsers from '../hooks/useGetOtherUsers';


const Sidebar = () => {

  const [search , setSearch] = useState("");
  const {otherUsers} = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversationUser){
      dispatch(setOtherUsers([conversationUser]));
    }
    else{
      toast.error("User not found");
    }
  }

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
        
          <form onSubmit={submitHandler} className='flex items-center gap-2'>
              <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search...'className='input input-bordered rounded-md bg-white text-black hover:bg-white' />
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