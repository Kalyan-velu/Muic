import React, {useEffect} from 'react';
import DiscoverBlock from "./discoverBlock/index.jsx";
import {useSelector} from "react-redux";
import useAuth from "../../../features/hooks/UseAuth.js";
import {useNavigate} from "react-router-dom";
export default function Discover() {
    const navigate=useNavigate()
    const {code}=useSelector((state) => state.auth);
    const accessToken=useAuth(code,navigate)
    useEffect(()=>{
        if(code===null){
            navigate('/')
        }
    },[])
    return(
        <div>
            Discover
            <DiscoverBlock/>
        </div>
    )
}