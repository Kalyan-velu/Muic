import React, {useEffect, useState} from 'react';
import DiscoverBlock from "./discoverBlock/index.jsx";
import {useSelector} from "react-redux";
import useAuth from "../../../features/hooks/UseAuth.js";
import {useNavigate} from "react-router-dom";
import "../styles/discover.scss"
import axios from "axios";
import {api} from "../../../api/index.js";

export default function Discover() {
    const navigate=useNavigate()
    const [songs,setSongs]=useState([]);
    const {code}=useSelector((state) => state.auth);
    const accessToken=useAuth(code,navigate)

    const getSongRecommendation=async()=>{
        try{
            const {data}=await api.get('/songs/recommendations')
            setSongs(data.items)
            return data
        }catch(e){
            console.log(e)
        }

    }
    useEffect(()=>{
        if(code===null){
            navigate('/')
        }
        getSongRecommendation().then(data=>console.log(data))
    },[])
    return(
        <div className={"discover"}>
            <DiscoverBlock data={songs} title={"Your Top Songs"}/>
            <DiscoverBlock data={songs} title={"Recommendations"}/>
        </div>
    )
}