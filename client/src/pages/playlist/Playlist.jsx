import React from 'react'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import LeftSidebar from '../../component/main/sidebar/LeftSidebar'
import PlayListDetails from '../../component/main/details/PlayListDetails'
import Button from '../../component/buttons/Button'
const Playlist = () => {
  const navigate = useNavigate()

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
        <PlayListDetails />
      </div>
    </div>
  )
}

export default Playlist