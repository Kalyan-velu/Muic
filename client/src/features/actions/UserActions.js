import { api } from "../../api"

// export const Me=()=>async(dispatch)=>{
//    try {
//       const {data}=await (await api.get('/user/me'))
//       console.log(data)
//       dispatch({type:'SET_USER',payload:data})
//    } catch (e) {
//       console.log(e)
//    }
// }

export const getPlayList=()=>async(dispatch)=>{
   try {
      const {data}=await (await api.get('/user/playlist'))
      console.log(data)
      dispatch({type:'SET_USER_PLAYLISTS',payload:data})
   } catch (e) {
      console.log(e)
   }
}