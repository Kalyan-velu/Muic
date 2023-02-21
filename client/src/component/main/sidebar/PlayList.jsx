import React from 'react'
import {Link} from "../../buttons/Link.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import {useDispatch} from "react-redux";
import {getNextPlayList, getPlayList} from "../../../features/actions/UserActions.js";
const PlayList = ({ playlists: p ,fetchImages}) => {
    const dispatch = useDispatch()

   return (
       <div className={'u-l-playlist'}>
           {/*<InfiniteScroll*/}
           {/*    dataLength={p?.length}*/}
           {/*    next={fetchImages}*/}
           {/*    hasMore={true}*/}
           {/*    loader={<h4>Loading...</h4>}*/}
           {/*>*/}
               <div className="u-l-playlist-img">
                   {(p.images.length=== 0)? null :<img loading={"lazy"} src={p.images[0].url} alt={p.name}/>}
               </div>
               <div className="u-l-playlist-name">
                   <Link to={`/playlist/${p.url}`}><p>{p.name}</p></Link>
               </div>
           {/*</InfiniteScroll>*/}

       </div>
   )
}

export default PlayList