import React, {useEffect} from 'react'
import {Navigate} from "../../component/navigation/Navigate.jsx";
import '../../App.css'
import UserPlayLists from "./UserPlayLists.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getPlayList} from "../../features/actions/UserActions.js";
const Playlist = () => {
    const dispatch=useDispatch()
    const {playlists}=useSelector(state => state.user)
    useEffect(()=>{
        dispatch(getPlayList())
    },[])
  return (
    <div className={"main-container"}>
      <div className='container'>
        {/*<Navigate/>*/}
          {playlists&&<UserPlayLists playlists={playlists}/>}
      </div>
    </div>
  )
}

export default Playlist