const axios = require("axios");

const Songs={
   getSongsRecommendations: async (req, res) => {
       const {token}=req
       try {
           const {data} = await axios.get(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=30`,{
               headers: {Authorization: `Bearer ${token}`}
           } )
           console.log(data)
           return res.status(200).json(data)
       }catch(e){
           return res.status(400).send({error:e.message})
       }
   }
}

module.exports=Songs