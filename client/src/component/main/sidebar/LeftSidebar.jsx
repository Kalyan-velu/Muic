import React, { useEffect } from 'react'
import './LeftSidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayList } from '../../../features/actions/UserActions'
import PlayList from './PlayList'
const LeftSidebar = () => {
  const { currentUser: user } = useSelector(state => state.auth)
  const { playlists } = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlayList())
  }, [])

  return (
    <nav className='left-sidebar'>
      <h3>Welcome, {user?.display_name}</h3>
      <ul>
      {playlists?.items?.map((p) => (
        <PlayList key={p?.id} playlists={p} />
      ))}
      </ul>
      

    </nav>
  )
}

export default LeftSidebar