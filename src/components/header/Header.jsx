import React from 'react'
import NavBar from './navBar/NavBar'
import TopBar from './topBar/TopBar'
import NavBarRoutes from './navBar/NavBarRoutes'

const Header = () => {
  return (
    <div id='header-container'>
        <TopBar/>
        <NavBar/>
    </div>
  )
}

export default Header