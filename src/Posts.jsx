import React from 'react'
import { useEffect, useState } from 'react'

function Posts() {
    
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3030/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);

    return (
      <div className="d-flex flex-column align-items-center mx-auto">
        {posts.map((post) => (
          <div key={post.user_id} className="my-3 border-bottom w-50">
            <div className="d-flex gap-2 align-items-center">
              <img className="profile rounded-circle p-2" src={post.profile_pic} alt="Profile" />
              <p>{post.username}</p>
            </div>
            <img src={post.post_img} alt="Post" className="post-img w-100" />
            <div className="d-flex gap-1">
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-send"></i>
            </div>
            <h6>{post.likes} likes</h6>
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    );
    
}

export default Posts