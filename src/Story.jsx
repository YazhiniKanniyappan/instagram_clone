import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Story() {

    const [stories,setStories] = useState([]);
    const navigate = useNavigate();
    let tot = 0;
   useEffect(()=>{
           fetch('http://localhost:3030/story')
           .then(res => res.json())
           .then(data => {setStories(data)});
       }, []);
  return (
    <div>
     <div className='d-none'>{tot = stories.length}</div>
       {
       (stories.length > 0) ?
        <div className='story-div d-flex m-2 gap-2' >
        {
          stories.map((story)=>(
            <div className='d-flex flex-column' key={story.user_id} onClick={()=> navigate(`/story/${story.id}/${tot}`)}>
              <div className="story-color d-flex align-items-center justify-content-center ">
                <img className="profile rounded-circle" src={story.profile_pic} alt="Profile" />
              </div>
              <small className='text-truncate' style={{width: "50px"}}>{story.username}</small>
            </div>
          ))
        }
       </div> : 
       <div>Loading...</div>
       }
    </div>
  )
}

export default Story;