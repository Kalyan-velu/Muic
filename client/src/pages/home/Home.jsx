import React from 'react'
import '../../App.css'
import UseAuth from '../../features/hooks/UseAuth'
import { useNavigate } from 'react-router-dom'
import LeftSidebar from '../../component/main/sidebar/LeftSidebar'
import Button from '../../component/buttons/Button'
const Dashboard = ({ code }) => {
   const navigate = useNavigate()
   const accessToken = UseAuth(code, navigate)

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
               {accessToken}
            </div>
         </div>
      </div>
   )
}

export default Dashboard