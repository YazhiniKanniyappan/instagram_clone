import React from 'react'
import { useState, useEffect } from 'react';
function Suggestions() {

  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  
      useEffect(()=>{

          fetch('http://localhost:3030/profile')
          .then(res => res.json())
          .then(data => setProfile(data));

          fetch('http://localhost:3030/suggestions')
          .then(res => res.json())
          .then(data => setSuggestions(data));

      }, []);
      
      
  return (
    <div className='w-75 mx-auto' >
      {
        profile ? 
        <div className=' W-75 mx-auto' >
          <div className="d-flex align-items-center my-3 mx-auto">
            <img className="profile rounded-circle p-2" src={profile.profile_pic} alt="Profile" />   
            <div className='d-flex flex-column'>
              <small className='fw-bold p-0 m-0'>{profile.user_id}</small>
              <small className=''>{profile.username}</small>
            </div>
            <small className='text-primary ms-auto'>switch</small>
          </div>
          <div>
            <div className='d-flex'>
              <small className='text-secondary'>Suggeted for you</small>
              <small className=' ms-auto fw-bold'>see All</small>
            </div>
            {suggestions.map((suggestion) => (
            <div key={suggestion.user_id} className="my-3 ">
              <div className="d-flex gap-2 align-items-center">
                <img className="profile rounded-circle p-2" src={suggestion.profile_pic} alt="Profile" />
                <p>{suggestion.username}</p>
                <small className='text-primary ms-auto'>Follow</small>

              </div>
            </div>))}
        </div>
      </div>
        :
        <div>Loading...</div>
      }
    </div>
  )
}

export default Suggestions