import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import classes from './Navbar.module.css'
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Button from '../buttons/Button';
import ClickAwayListener from '../buttons/ClickAwayListener';
import { Link } from '../buttons/Link';
import {Navigate} from "../navigation/Navigate.jsx";

const Navbar = () => {
  const dispatch = useDispatch()
  const { currentUser: user } = useSelector(state => state.auth)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (user===null) {
      navigate('/')
    }
  }, [user])

  const handleLogout = () => {
    dispatch({ type: "REMOVE_CURRENT_USER" })
  }

  return (
    <ClickAwayListener onClickAway={() => setShow(false)}>
      <nav className={classes.navbar}>
          <Navigate/>
          <div className={classes.logo}>
            <Link to={'/'}><img src={Logo}  alt={'logo'}/></Link>
          </div>

        {/* <div style={{ flexGrow: 1 }} /> */}
        {user &&
          <div className={classes.user}>
            <Button onClick={() => setShow(!show)}><FiLogOut /> </Button>
            <Link to={`/profile/${user.id}`} className={classes.ulink}>
              {user.display_name.split(" ")[0]}
            </Link>
            <img loading='lazy' src={user.images[0].url} alt={""} />

            {show ? <div className={classes.menu}>
              <Button onClick={handleLogout}>Logout</Button>
            </div> : null}
          </div>}
      </nav>
    </ClickAwayListener>
  )
}

export default Navbar