import React from 'react'
import './TopNav.css'
import { Link, NavLink } from 'react-router-dom'
export const TopNav = () => {
  return (
    <>
      <div class='navbaar'>
        <div id='logo'><h2>Hey ! Kumawatraj</h2></div>

        <NavLink class='nav1'>


          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link>
          
          <Link to='/experiences'>Experiences</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/Contect'>Say hyy!</Link>
        </NavLink>


      </div>
      <div class='maincontent'>

      </div>
    </>
  )
}
export default TopNav