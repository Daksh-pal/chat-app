import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMessages } from '../redux/messageSlice';

function SendInput() {
  
  const [message,setMessage] = useState("");
  const dispatch = useDispatch();
  const {selectedUser} = useSelector(store => store.user);
  const {messages} = useSelector(store => store.message);


  const submitHandler = async (e) =>{
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/message/send/${selectedUser?._id}`,{message},
        {
          headers:{
            'Content-type' : "application/json"
          },
          withCredentials : true,
        });
        console.log(res);
        dispatch(setMessages([...messages , res?.data?.newMessage]))
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  }

    return (
      <form onSubmit={submitHandler} className='px-4 my-3'>
          <div className='w-full relative'>
              <input value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='Type a message' className='border text-sm  block w-full p-3  bg-white text-black rounded-lg' />
              <button  type="submit" className='absolute flex items-center text-violet-800 p-2 border-black border-l-2 inset-y-0 end-0'><IoMdSend />
              </button>
          </div>
      </form>
    )   
}

export default SendInput