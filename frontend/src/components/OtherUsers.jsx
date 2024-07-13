import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'

function OtherUsers() {

useGetOtherUsers();

  return (
        <div className='m-2 h-96 overflow-auto border-b-2 border-black rounded-lg'>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>
            <OtherUser/>

        </div>
  )
}

export default OtherUsers