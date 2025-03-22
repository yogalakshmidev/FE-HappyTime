import React from 'react'
import Feed from './Feed'
import { Outlet } from 'react-router'
import RightSidebar from '../wrappers/RightSidebar'

const Home = () => {
  return (
    <div className='flex'>
      <div className='flex-grow'>
        <Feed/>
        <Outlet/>

      </div>
      <RightSidebar/>

    </div>
  )
}

export default Home