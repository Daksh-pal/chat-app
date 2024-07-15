import React from 'react'
import proPic from "./proPic.jpg";

const Message = ({message}) => {
  return (
    <div>
        <div className="chat chat-start">
          <div >
            <img src={proPic} className='max-w-12 rounded-full' alt="" />
          </div>
            <div className="chat-bubble bg-blue-600 text-white">
                It's over Anakin,
            </div>
        </div>


        <div className="chat chat-end">
            <div className="chat-bubble bg-violet-700 text-white">{message?.message}</div>
            <div className=''>
              <time className='text-xs opacity-50 text-black'> 12:45 </time>
            </div>
        </div>
    </div>
  )
}

export default Message