import React from 'react'
import MenuItems from '../menuItems/MenuItems.js'
import Navbar from '../navbar/Navbar.js'
import MultiLevelDrawer from '../navbar/multiLevelDrawer/MultiLevelDrawer.js'
import SearchInput from '../navbar/searchInput/SearchInput.js'

function Home() {
  return (
    <div>
        <div className=' bg-[#352D39] h-screen'>
        {/* <MenuItems /> */}
        <Navbar />
        {/* <MultiLevelDrawer /> */}
            </div>
        </div>
  )
}

export default Home