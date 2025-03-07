import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
function ViewStory() {

    const {id, tot} = useParams();
    const [story, setStory] = useState(null);
    const navigate = new useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:3030/story/${id}`)
        .then(res => res.json())
        .then(data =>{setStory(data)})
        .catch((err)=> console.log(err))
    },[id]);

    if(id>tot || id<=0){
        navigate("/");
    }
  return (
    <div>
        {
            story ? 
            <div className='d-flex justify-content-center align-items-center'>
                <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className="fs-2 text-dark bi bi-arrow-left-circle-fill"></i></Link>
                <img src={story.img} className="vh-100 vw-50 " alt="Unavailable" />
                <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="fs-2 text-dark p-2 bi bi-arrow-right-circle-fill"></i></Link>
            </div> : 
            
            <div>Loading..</div>
        }
    </div>
  )
}

export default ViewStory