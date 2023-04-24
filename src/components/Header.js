import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className='app-header'>
        <div className='header-elements'>
                  <div className='header-element'>
                      <Link to="/">About me</Link>
                  </div>
                <div className='header-element'>
                    <Link to="/carrier">Carrier</Link>
                </div>
                <div className='header-element'>
                    <Link to="/skills"> Skills </Link>
                </div>
                <div className='header-element'>
                    <Link to="/contacts"> Contacts</Link>
                </div>
        </div>
      </nav>
      <Outlet />  
    </>
  )
}

export default Header