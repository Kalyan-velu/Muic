import React from 'react'
import './UserPlayLists.css'
const UserPlayLists = ({playlists}) => {
  return(
      <div className={'u-p-container'}>
          {playlists.items?.map((p)=>(
              <div className={'u-playlist'}>
                  <div className="u-playlist-img">
                      {(p.images.length=== 0)? null :<img loading={"lazy"} src={p.images[0].url} alt={p.name}/>}
                  </div>
                  <div className="u-playlist-name">
                      <p>{p.name}</p>
                  </div>
              </div>
          ))}

      </div>

  )
}
export default UserPlayLists