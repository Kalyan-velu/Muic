import React from  'react'
import {Route, Routes, useNavigate} from "react-router-dom";
import Discover from "./discover";
import Login from "./login";
import {useDispatch, useSelector} from "react-redux";
import PlayLists from "./playlists/index.jsx";

export default function AllRoutes() {
    const dispatch=useDispatch();
    const {code,refreshToken}=useSelector(state => state.auth)
    React.useEffect(()=>{
        setTimeout(()=>{
            if(refreshToken===null){
                dispatch({type:"REMOVE_CODE"})
            }
        },14000)
    },[code])
    return(
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'/discover'} code={code} element={<Discover/>}/>
            <Route path={'/playlists'} code={code} element={<PlayLists/>}/>
        </Routes>
    )
}