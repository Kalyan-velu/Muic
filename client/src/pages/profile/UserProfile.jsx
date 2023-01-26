import React from 'react'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import LeftSidebar from '../../component/main/sidebar/LeftSidebar'
import { useSelector } from 'react-redux'
import Button from '../../component/buttons/Button'

const UserProfile = () => {
   const navigate = useNavigate()
   const { currentUser: user } = useSelector(state => state.auth)
   
   const previous = () => {
      navigate(-1)
   }
   const next = () => {
      navigate(+1)
   }

   return (
      <div className={"main-container"}>
         <LeftSidebar />
         <div className='container'>
            <div className='btn-container'>
               <Button onClick={previous} className='nav-btn'>Back</Button>
               <Button onClick={next} className='nav-btn'>Next</Button>
            </div>
            <div>
               {user.display_name}
            </div>
            
         </div>
      </div>
   )
}

export default UserProfile