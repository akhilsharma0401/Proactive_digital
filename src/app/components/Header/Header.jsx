import React from 'react'
import AnnouncementBar from './announcementBar/AnnouncementBar'; 
import Navbar from './menubar/Navbar'; 

function Header() {
  return (
    <>
        <AnnouncementBar/>
        <div className='sticky top-0 z-1000 '>

        <Navbar/>
        </div>
    </>
  )
}

export default Header