import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import male from '../images/male.jpg';
import female from '../images/female.jpg';

const Message = ({ message }) => {
  const { authUser, selectedUser } = useSelector(store => store.user);

  const scroll = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  const getProfilePhoto = (user) => {
    return user?.gender === 'male'? male : female;
  };

  const isSender = authUser?._id === message?.senderId;

  return (
    <div ref={scroll} className={`mt-4 chat ${isSender? 'chat-end' : 'chat-start'}`}>
      <div className="chat-bubble bg-violet-700 text-white">{message?.message}</div>
      {!isSender && (
        <div className='w-10 rounded-full'>
          <img src={getProfilePhoto(selectedUser)} alt="profilePhoto" />
        </div>
      )}
      <div>
        <time className='text-xs opacity-50 text-black'> 12:45 </time>
      </div>
    </div>
  );
};

export default Message;