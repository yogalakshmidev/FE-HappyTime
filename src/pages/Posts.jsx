import React from 'react'
import Post from '../components/Post'

const Posts = () => {
  return (
    <div>
      {
          [1,2,3,4].map((item,index)=>
            <Post key={index} />)
      }
      
    </div>
  )
}

export default Posts