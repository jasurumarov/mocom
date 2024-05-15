import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Images
import SiteLogo from "../../images/site-logo.svg"
import { FiSearch } from 'react-icons/fi'

const Header = () => {
  const [menu, setMenu] = useState(false)
  let wishlist = useSelector(state => state.heart.value)

  return (
    <header>
        <div className="container">
            <div className="header__content">
              <ul className={menu ? "show" : ""}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/wishlist"}>Wishlist <sup>{wishlist.length}</sup></NavLink>
                <NavLink to={"/contact-us"}>Contact Us</NavLink>
              </ul>
              <img src={SiteLogo} alt="site logo" />
              <div>
                <a href="#">About Us</a>
                <label>
                  <input type="search" placeholder='Search Product'/>
                  <FiSearch />
                </label>
              </div>
              <button onClick={() => setMenu(p => !p)} className='menu-btn'>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
        </div>
    </header>
  )
}

export default Header