import React from 'react'
import SendInput from './SendInput'
import { FaUser } from "react-icons/fa";
import Messages from './Messages';

const MessageContainer = () => {
  return (
      <div className='md:min-w-[550px] flex flex-col'>
        <div className='flex gap-2 items-center bg-violet-500 rounded-sm text-white px-4 py-2 cursor-pointer '>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    {/* <img src=" alt="" />
                     */}
                     <FaUser className='mt-4'/>

                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <p>Daksh pal</p>
                    </div>
                </div>
            </div>
            <Messages/>
            <SendInput/>
    </div>
  )
}
export default MessageContainer