import React from 'react'
import Routers from '../../routes/Routers'
import './Main.css'
import Header from '../header/Header'
const Main = ({isSearching, setIsSearching}) => {
  return (
    <div className='main'>
    <Routers isSearching={isSearching} setIsSearching= {setIsSearching}/>
    </div>
  )
}

export default Main