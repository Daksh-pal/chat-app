import React from 'react'
import Message from './Message'
import { useSelector } from 'react-redux';
import useGetRealtimeMessage from '../hooks/useGetRealtimeMessage';
import useGetMessages from '../hooks/useGetMessages';

const Messages = () => {

  useGetMessages();
  useGetRealtimeMessage();
  
  const {messages} = useSelector(store => store.message);
  if(!messages) return;

  return (
    <div className='px-4 flex-1 overflow-auto text-white'>
      {
        messages && messages?.map((message) => {
          return (
            <Message key={message._id} message={message}/>
          )
        })
      }
    </div>
  )
}

export default Messages