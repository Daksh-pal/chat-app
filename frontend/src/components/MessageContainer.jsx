import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages';
import { setSelectedUser , setAuthUser  } from "../redux/userSlice";
import { useDispatch, useSelector } from 'react-redux';

const MessageContainer = () => {

    const {selectedUser , authUser} = useSelector(store => store.user);
    const dispatch = useDispatch()

    useEffect(()=>{
        return()=> dispatch(setSelectedUser(null))
    },[])

    if(!selectedUser){
        return(
            <div className='md:min-w-[550px] flex flex-col items-center justify-center'>
                <h1 className='text-violet-800 text-2xl'>Hi, <span className='font-bold'>{authUser?.fullName}</span> </h1>
                <h1 className='text-violet-800  text-2xl'>Select an User to start Conversation</h1>
            </div>
        )
    }
    else{
        return (
            <div className='md:min-w-[550px] flex flex-col'>
              <div className='flex gap-2 items-center bg-violet-500 rounded-sm text-white px-4 py-2 cursor-pointer'>
                  <div className='avatar online'>
                      <div className='w-12 rounded-full'>
                          <img src={selectedUser?.profilePhoto} alt="Pro-Pic" />
                          </div>
                      </div>
                      <div className='flex'>
                          <div>
                              <p>{selectedUser?.fullName}</p>
                          </div>
                      </div>
                  </div>
                  <Messages/>
                  <SendInput/>
          </div>
        )
    }

  
}
export default MessageContainer