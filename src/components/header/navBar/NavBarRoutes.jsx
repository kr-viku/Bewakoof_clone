import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../../main/Main'
import Men from '../../main/Men'
import Women from '../../main/Women'
import MobileCover from '../../main/MobileCover'

const NavBarRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Men' element={<Men/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/MobileCovers' element={<MobileCover/>}/>

    </Routes>
  )
}

export default NavBarRoutes