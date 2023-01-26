import React from 'react'
import { Link } from '../../buttons/Link'

const PlayList = ({ playlists: p }) => {
   return (
      <li key={p?.id} className='playlist'>
         <Link to={`/playlist/${p?.id}`} className={'link'}>{p?.name}</Link>
      </li>
   )
}

export default PlayList