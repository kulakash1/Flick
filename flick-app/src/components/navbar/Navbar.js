import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import SearchInput from './searchInput/SearchInput';
import { Link } from 'react-router-dom';
// import logoImg from '../../image/AppLogo.png'

function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className='bg-[#1c1c1e] text-[#fff]'>
      {/* Navbar Start */}
      <div>
        {/* <div className="bg-[#f7931e] h-10 items-center flex justify-between p-4"> */}
        <div className="h-12 items-center flex justify-between p-4">
            <div className="logo flex">
                {/* <img src={logoImg} alt='' /> */}
                <h1 className='text-3xl font-bold'>SwaadSay</h1>
            </div>
            {
                menuToggle?
            <AiOutlineClose onClick={() => setMenuToggle(!menuToggle)} className='block md:hidden' />
            :
            <AiOutlineMenu onClick={() => setMenuToggle(!menuToggle)} className='block md:hidden' />
            }
            <div className="hidden md:flex h-5">
            <SearchInput />
            </div>
            <ul className="hidden md:flex gap-10 text-white">
            
                    {/* <li>Home</li>
                    <li>Cart</li> */}
                    <li>
                      <Link to='/profile'>Profile</Link>
                      </li>
                    <li>
                      <Link to='/profile/settings'>Profile Se</Link>
                      </li>
                    <li>
                      <Link to=''>Home</Link>
                      </li>
                    <li>
                      <Link to='/user-comments'>UserComments</Link>
                      </li>
                    <li>
                      <Link to='/contact-us'>Contact Us</Link>
                      </li>
                    <li>
                      <Link to='/about-us'>About Us</Link>
                      </li>
                    <li>
                      <Link to='/admin'>Admin</Link>
                      </li>
                    <button>LogOut</button>
                </ul> 
        </div>
      </div>
      
                
                {/* Responsive Menu */}
                <ul className={`duration-300 md:hidden w-full h-full gap-10 z-50 text-white bg-black fixed ${menuToggle?"left-0":"left-[-100%]"}
                `}>
                    {/* <input>

                        <button>Search Icon</button>
                    </input> */}
                    <div className="p-3">
                    <SearchInput />
</div>
                    {/* <li className='p-3'>Home</li>
                    <li className='p-3'>Cart</li> */}
                    <li className='p-3'>Profile</li>
                    <button className='p-3'>LogOut</button>
                </ul>
    </div>
  )
}

export default Navbar