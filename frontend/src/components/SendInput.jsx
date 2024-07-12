import React from 'react'
import { IoMdSend } from "react-icons/io";

function SendInput() {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text" placeholder='Type a message' className='border text-sm  block w-full p-3  bg-white text-black rounded-lg' />
            <button className='absolute flex items-center text-violet-800 p-2 border-black border-l-2 inset-y-0 end-0'><IoMdSend />
            </button>
        </div>
    </form>
  )
}

export default SendInput