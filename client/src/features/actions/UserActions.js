import { api } from "../../api"

export const Me=()=>async(dispatch)=>{
   try {
      const {data}=await (await api.get('/user/me'))
      console.log(data)
      dispatch({type:'SET_USER',payload:data})
   } catch (e) {
      console.log(e)
   }
}