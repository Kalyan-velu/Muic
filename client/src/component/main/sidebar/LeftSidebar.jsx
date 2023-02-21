import React, { useEffect } from 'react'
import './LeftSidebar.css'
import {motion} from "framer-motion";
import { useDispatch, useSelector } from 'react-redux'
import {getNextPlayList, getPlayList} from '../../../features/actions/UserActions'
import PlayList from './PlayList'
import classes from "../../login/Login.module.css";
const LeftSidebar = () => {
    const dispatch = useDispatch()
    const { currentUser: user } = useSelector(state => state.auth)
    const { playlists } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getPlayList())
  }, [])

    function handleClick() {

    }

    function fetchImages() {
        dispatch(getNextPlayList(playlists?.next))
    }

    return (
    <nav className='left-sidebar'>
        <div className='user-profile'>
           <h3> Welcome {user?.display_name}</h3>
        </div>
        <div className='playlists'>
            <div className='playlists-header'>
                <h3>Playlists</h3>
                <motion.button
                    whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}
                    // onClick={onClick}
                    // className={classes.logbtn}
                    onClick={handleClick}
                >+</motion.button>
            </div>
                {playlists?.items?.map(p => <PlayList key={p.id} fetchImages={fetchImages} playlists={p} />)}
        </div>

    </nav>
  )
}

export default LeftSidebar