import React from 'react'
import Login from '../component/login/Login'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import UserProfile from '../pages/profile/UserProfile'
import { useSelector } from 'react-redux'
import Playlist from '../pages/playlist/Playlist'

const AllRoutes = () => {
   const { code } = useSelector(state => state.auth)
   return (
      <Routes>
         <Route path='/' element={code ? <Home code={code} /> : <Login />} />
         <Route path="/dashboard" element={code ? <Home code={code} /> : null} />
         <Route path="/profile/:id" element={<UserProfile />} />
         <Route path="/playlist/:id" element={<Playlist />} />
      </Routes>
   )
}

export default AllRoutes