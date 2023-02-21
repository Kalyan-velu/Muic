import React from 'react'
import '../../App.css'
import { useSelector } from 'react-redux'

const UserProfile = () => {
   const { currentUser: user } = useSelector(state => state.auth)

   return (
      <div className={"main-container"}>
         <div className='container'>

         </div>
      </div>
   )
}

export default UserProfile