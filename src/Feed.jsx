import Story from './Story';
import Posts from './Posts';


function Feed() {

  return (
    <div>
      <div className=' story'>
         <Story />
      </div>
    
      <div >
         <Posts />
      </div>
    </div>
  )
}

export default Feed;