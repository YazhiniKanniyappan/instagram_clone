import React from 'react'
import Sidebar from './Sidebar';
import Suggestions from './Suggestions';
import Feed from './Feed';

function App() {
  return (
    <div className='d-flex vh-100'>
        <div className='w-20'><Sidebar /></div>
        <div className='w-50 '><Feed /></div>
        <div className='w-30 '><Suggestions /></div>
    </div>
  )
}

export default App;