import React from 'react'
import Sidebar, { MobSidebar } from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="grid grid-flow-col pt-[78px]">
        <Sidebar/>
        <MobSidebar/>
        <Outlet/>
        
    </div>
  )
}

export default Body