import React from 'react'

function Sidebar() {
  return (
<>
      <div className='d-flex flex-column m-3 gap-3 position-fixed'>
          <img className='img' src="images\assets\Instagram_logo.svg.png" alt="instagram img" />
          <div><i className="bi bi-house-door-fill"></i>Home</div>
          <div><i className="bi bi-search"></i>Search</div>
          <div><i className="bi bi-compass"></i>Explore</div>
          <div><i className="bi bi-play-btn"></i>Reels</div>
          <div><i className="bi bi-chat-dots"></i>Messages</div>
          <div><i className="bi bi-heart"></i>Notification</div>
          <div><i className="bi bi-plus-square"></i>Create</div>
          <div><i className="bi bi-person-circle"></i>Profile</div>
      </div>
      <div className='d-flex flex-column position-fixed bottom-0 m-3 gap-3'>
          <div><i className="bi bi-threads"></i>Threads</div>
          <div><i className="bi bi-list"></i>More</div>
      </div>
    </>
  )
}

export default Sidebar;