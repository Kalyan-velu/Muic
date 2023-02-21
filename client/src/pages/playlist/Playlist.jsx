import React, {useEffect} from 'react'
import UserPlayLists from "./UserPlayLists.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getPlayList} from "../../features/actions/UserActions.js";
import '../../App.css'
const Playlist = () => {
    const dispatch=useDispatch()
    const {playlists}=useSelector(state => state.user)

    useEffect(()=>{
        dispatch(getPlayList())
    },[])
  return (
      <div className='container'>
          {playlists&&<UserPlayLists playlists={playlists}/>}
      </div>
  )
}

export default Playlist