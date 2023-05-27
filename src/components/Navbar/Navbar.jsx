import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>   
    <div className='navbar'>
        <div className='logo'>
            <h2>Movies</h2>
        </div>
        <div className='links'>
        <Link to='/' style={{textDecoration:"none"}}>Home</Link>
        <Link to='/favourite' style={{textDecoration:"none"}}>Favourites</Link>
        </div>
    </div>
    </>
  )
}
