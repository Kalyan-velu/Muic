import React from 'react'
import { Logo } from '../../assets/logo.jsx'
import classes from './Navbar.module.css'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const {user}=useSelector(state=>state.user)
  return (
    <nav className={classes.navbar}>
      <div className='logo'>
        <div>
          <Logo />
        </div>
      </div>
      {/* <div style={{ flexGrow: 1 }} /> */}
      <div className={classes.user}>
        {user?.display_name.split(" ")[0]}
        <img src={user?.images[0].url} alt={""}/>
      </div>
    </nav>
  )
}

export default Navbar