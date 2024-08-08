import React from 'react'
import Header from './Header'
import "./index.css"
import { NavLink, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <>
        <Header/>
    <h1>CONTACT US PAGE!!!</h1>

    <div className='nested'>
      <NavLink to="youtube">Youtube</NavLink>
      <NavLink to="twitter">Twitter</NavLink>
      <NavLink to="github">GitHub</NavLink>
    </div>

    <Outlet/>
    </>
  )
}

export default Contact;





