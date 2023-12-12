import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Body() {
  return (
    <>
      <div className='flex'>
        <Header/>
        <Sidebar />
        <Outlet/>
      </div>
    </>
  )
}

export default Body