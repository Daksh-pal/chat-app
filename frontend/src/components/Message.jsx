import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const Message = ({message}) => {

  const {authUser , selectedUser} = useSelector(store => store.user);

  const scroll = useRef();
  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"});
  },[message])

  return (
        <div ref={scroll} className={`mt-4 chat ${authUser?._id === message?.senderId ? 'chat-end' : 'chat-start' }`}>
            <div className="chat-bubble bg-violet-700 text-white">{message?.message}</div>
            <div className='w-10 rounded-full'>
              <img src={message.senderId===authUser?._id ? authUser?.profilePhoto : selectedUser?.profilePhoto } alt="Profile photo" />
            </div>
            <div>
              <time className='text-xs opacity-50 text-black'> 12:45 </time>
            </div>
        </div>
  )
}

export default Message