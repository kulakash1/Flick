import React, { useState } from 'react'
import MenuItems from '../menuItems/MenuItems.js'
import NavbarTest from '../navbar/NavbarTest.js'
import MultiLevelDrawer from '../navbar/multiLevelDrawer/MultiLevelDrawer.js'
import SearchInput from '../navbar/searchInput/SearchInput.js'
import Navbar from '../navbar/Navbar.js'
import HomePage from './testFol/TestFile.js'
import MenuItemsOption from '../menuItems/MenuItemsOption.js'
import Footer from './footer/Footer.js'
import HomepageTopCarousel from './carousel/HomepageTopCarousel.js'
import Sample from '../../Sample.js'

function Home() {

  // const {clicked, setClicked} = useState(false);
  // const clickedOut = () => {
  //   console.log("clickkked");
  //   setClicked(true);
  // }
  return (
    // <div onClick={clickedOut}>
    <div>
        <div className=' bg-[#352D39] h-cover'>
        <div className="d-flex flex-row">
        {/* <MenuItems clicked={true}/> */}
        {/* <Navbar /> */}
        {/* <HomepageTopCarousel /> */}
        <HomePage />
        {/* <Sample /> */}
        {/* <Footer /> */}
        {/* <MenuItemsOption /> */}

        </div>
        {/* <MenuItems clicked={clicked}/> */}
        {/* <NavbarTest /> */}
        {/* <MultiLevelDrawer /> */}
            </div>
        </div>
  )
}

export default Home