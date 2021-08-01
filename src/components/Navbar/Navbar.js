import React from 'react'
import  { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  return (
    <header>
      <h1 className='header-txt'>Pokédex</h1>
      <nav>
        <NavLink activeStyle={{
          color: 'white',
          fontWeight: 'bold'
        }} to='/' exact={true}><h1 className='head-txt'>Home</h1></NavLink>
        <NavLink activeStyle={{
          color: 'white',
          fontWeight: 'bold'
        }} to='/caught'><h1 className='head-txt'>Show Caught</h1></NavLink>
      </nav>
    </header>
  )
}