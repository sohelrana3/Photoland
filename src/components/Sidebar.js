import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'

const Sidebar = () => {
    const {setIsopen, handleClose} =  useContext(SidebarContext);
  return (
    <div className='w-full h-full bg-black top-0 fixed'>Sidebar</div>
  )
}

export default Sidebar