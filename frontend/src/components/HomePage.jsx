import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  return (
    <div className='flex rounded-xl overflow-hidden bg-violet-400  sm:h-[450px] md:h-[550px]'>
      <Sidebar/>
      <MessageContainer/> 
    </div>
  )
}
export default HomePage