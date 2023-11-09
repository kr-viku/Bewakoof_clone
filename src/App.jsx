import React from 'react'
import Header from './components/header/Header'
import './App.css'
import NavBarRoutes from './components/header/navBar/NavBarRoutes'

const App = () => {
  return (
    <div id='app'>
      <Header/>
      <NavBarRoutes/>
    </div>
  )
}

export default App