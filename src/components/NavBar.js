import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div style={{justifyContent:"center",display:"flex"}}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default NavBar