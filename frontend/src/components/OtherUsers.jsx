import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'
import { useSelector } from 'react-redux';

const OtherUsers = () => {

useGetOtherUsers();


const {otherUsers} = useSelector(store => store.user);
 if(!otherUsers) return; // early return

  return (
        <div className='m-2 h-96 overflow-auto border-b-2 border-black rounded-lg'>
          {
            otherUsers?.map((user)=>{
              return (
                <OtherUser key={user._id} user={user}/>
              )
            })
          }

        </div>
  )
}

export default OtherUsers