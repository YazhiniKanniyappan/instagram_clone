import Story from './Story';
import Posts from './Posts';


function Feed() {

  return (
    <div className=' border-start d-flex justify-content-center flex-column align-items-center'>
      <div>
         <Story />
      </div>
    
      <div >
         <Posts />
      </div>
    </div>
  )
}

export default Feed;