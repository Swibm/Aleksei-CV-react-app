import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className='app-header'>
        <div className='header-elements'>
                  <div className='header-element'>
                      <NavLink activeClassName = "active" to="/">About me</NavLink>
                  </div>
                <div className='header-element'>
                    <NavLink activeClassName = "active" to="/carrier">Career</NavLink>
                </div>
                <div className='header-element'>
                    <NavLink activeClassName = "active" to="/skills"> Skills </NavLink>
                </div>
                <div className='header-element'>
                    <NavLink activeClassName = "active" to="/contacts"> Contacts</NavLink>
                </div>
        </div>
      </nav>
      <Outlet />  
    </>
  )
}

export default Header