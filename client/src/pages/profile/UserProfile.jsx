import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
   const { user } = useSelector(state => state.user)
   return (
      <div>
         {user.display_name}
      </div>
   )
}

export default UserProfile