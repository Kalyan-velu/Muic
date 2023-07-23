import {getPlayList} from "../../../features/actions/UserActions.js";
import UserPlayLists from "../../playlists/components/playlist/UserPlayLists.jsx";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../styles/style.scss"
export default function PlayLists() {

  const dispatch=useDispatch()
  const {playlists}=useSelector(({user}) => user)

  useEffect(()=>{
    dispatch(getPlayList())
  },[])
    return(
      <>
        <h3>PlayLists</h3>

        <div className={"playlist"}>
            {playlists&&<UserPlayLists playlists={playlists}/>}
        </div>
      </>
    )
}