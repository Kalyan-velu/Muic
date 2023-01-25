import React from 'react'
import './Home.css'
import UseAuth from '../../features/hooks/UseAuth'
import { useNavigate } from 'react-router-dom'
const Dashboard = ({ code }) => {
   const navigate=useNavigate()
   const accessToken = UseAuth(code,navigate)
   
   return (
      <div className={"container"}>
         {accessToken}
      </div>
   )
}

export default Dashboard