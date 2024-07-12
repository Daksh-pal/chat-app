import React from 'react'

function Message() {
  return (
    <div>
        <div className="chat chat-start">
            <div className="chat-bubble bg-blue-600 text-white">
                It's over Anakin,
                <br />
                I have the high ground.
            </div>
        </div>
        <div className="chat chat-end">
            <div className="chat-bubble bg-violet-700 text-white">You underestimate my power!</div>
        </div>
    </div>
  )
}

export default Message