import React from 'react'
import Login from '../component/login/Login'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/main/Home'
import UserProfile from '../pages/profile/UserProfile'
const AllRoutes = ({ code }) => {
   
   return (
      <Routes>
         <Route path='/' element={code ? <Home code={code} /> : <Login />}/>
         <Route path="/dashboard" element={code?<Home code={code}/>:null} />
         <Route path="/profile" element={<UserProfile/>} />
      </Routes>
   )
}

export default AllRoutes