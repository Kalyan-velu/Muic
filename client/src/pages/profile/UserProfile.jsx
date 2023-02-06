import React from 'react'
import '../../App.css'
import LeftSidebar from '../../component/main/sidebar/LeftSidebar'
import { useSelector } from 'react-redux'
import {Navigate} from "../../component/navigation/Navigate.jsx";

const UserProfile = () => {
   const { currentUser: user } = useSelector(state => state.auth)

   return (
      <div className={"main-container"}>
         <LeftSidebar />
         <div className='container'>
            <Navigate/>
            <div>
               {user.display_name}
            </div>
            
         </div>
      </div>
   )
}

export default UserProfile