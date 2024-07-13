import React from 'react';
import proPic from "./proPic.jpg";

function OtherUser() {
  return (
    <div>
        <div className='flex gap-2 items-center hover:bg-violet-300 hover:text-black text-white p-2 cursor-pointer'>
            <div className='avatar online '>
                <div className='w-12 rounded-full'>
                    <img src={proPic} alt="Pro-pic" />
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <p>Daksh pal</p>
                    </div>
                </div>
            </div>
            <hr className="border-b border-gray-500"></hr>
    </div>
  )
}

export default OtherUser