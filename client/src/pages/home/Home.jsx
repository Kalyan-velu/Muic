import React from 'react'
import '../../App.css'
import UseAuth from '../../features/hooks/UseAuth'
import { useNavigate } from 'react-router-dom'
import LeftSidebar from '../../component/main/sidebar/LeftSidebar'
import {Navigate} from "../../component/navigation/Navigate.jsx";
import TopSongs from "../../component/home/TopSongs.jsx";

const Dashboard = ({ code }) => {
   const navigate = useNavigate()
   const accessToken = UseAuth(code, navigate)


   return (
      <div className={"main-container"}>
         {/*<LeftSidebar />*/}
         <div className='container'>
            <Navigate/>
            <TopSongs/>
         </div>
      </div>
   )
}

export default Dashboard