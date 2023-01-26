import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import classes from './Navbar.module.css'
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Button from '../buttons/Button';
import ClickAwayListener from '../buttons/ClickAwayListener';
import { Link } from '../buttons/Link';

const Navbar = () => {
  const dispatch = useDispatch()
  const { currentUser: user } = useSelector(state => state.auth)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user])

  const handleLogout = () => {
    dispatch({ type: "REMOVE_CURRENT_USER" })
  }
  const previous = () => {
    navigate(-1)
  }
  const next = () => {
    navigate(+1)
  }
  return (
    <ClickAwayListener onClickAway={() => setShow(false)}>
      <nav className={classes.navbar}>
          <div className={classes.logo}>
            <Link to={'/'}><img src={Logo} /></Link>
          </div>

        {/* <div style={{ flexGrow: 1 }} /> */}
        {user &&
          <div className={classes.user}>
            <Button onClick={() => setShow(!show)}><FiLogOut /> </Button>
            <Link to={`/profile/${user.id}`} className={classes.link}>
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