var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

// const Me = async (req, res) => {
//    const token = req.token
//    console.log(token)
//    try {
//       await spotifyApi.setAccessToken(token)
//       const { body } = await spotifyApi.getMe()
//       console.log(body)
//       res.status(200).json(
//          body
//       )
//    } catch (e) {
//       console.log(e)
//       res.status(400).json({
//          message: e.message
//       })
//    }
// }

const PlayList = async (req, res) => {
   const token = req.token
   console.log(token)
   try {
      await spotifyApi.setAccessToken(token)
      const data = await spotifyApi.getUserPlaylists()

      res.status(200).json(
         data.body
      )
   } catch (e) {
      console.log(e)
      res.status(400).json({
         message: e.message
      })
   }
}

module.exports = { PlayList }