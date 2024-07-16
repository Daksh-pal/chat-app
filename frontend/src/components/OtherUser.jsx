import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

function OtherUser({user}) {

    const dispatch = useDispatch();
    const {selectedUser} = useSelector(store => store.user);


    const handleSelectedUser = (user) => {
        dispatch(setSelectedUser(user));

    }

  return (
    <>
        <div onClick={ ()=> handleSelectedUser(user)} className={`${selectedUser?._id === user?._id ?'bg-violet-300' :'text-white'} flex gap-2 items-center hover:bg-violet-300 text-black hover:text-black p-2 cursor-pointer`}>
            <div className='avatar online '>
                <div className='w-12 rounded-full'>
                    <img src={user?.profilePhoto} alt="user-profile" />
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <p>{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <hr className="border-b border-gray-500"></hr>
    </>
  )
}

export default OtherUser