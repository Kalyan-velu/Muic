// import axios from "axios"
const SpotifyWebApi = require("spotify-web-api-node");
const Login = async (req, res) => {
   const code = req.body.code
   try {
      const spotifyApi = new SpotifyWebApi({
         clientId: process.env.CLIENT_ID,
         clientSecret: process.env.CLIENT_SECRECT,
         redirectUri: process.env.REDIRECT_URI,
      })
      const { body } = await spotifyApi.authorizationCodeGrant(code)
      console.log({
         accessToken: body.access_token,
         refreshToken: body.refresh_token,
         expiresIn: body.expires_in,
      })
      await spotifyApi.setAccessToken(body.access_token)
      const { body: data } = await spotifyApi.getMe()
      console.log(data)
      res.status(200).json({
         accessToken: body.access_token,
         refreshToken: body.refresh_token,
         expiresIn: body.expires_in,
         user: { ...data }
      })
   } catch (error) {
      res.status(500).json({
         message: error
      })
   }

   // spotifyApi
   //    .authorizationCodeGrant(code)
   //    .then(data => {

   //       res.json({
   //          accessToken: data.body.access_token,
   //          refreshToken: data.body.refresh_token,
   //          expiresIn: data.body.expires_in,
   //       })
   //    })
   //    .catch(err => {
   //       res.status(400).send(err)
   //    })
}

const Refresh = async (req, res) => {
   const refreshToken = req.body.refreshToken
   const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URI,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRECT,
      refreshToken,
   })
   console.log(refreshToken)
   spotifyApi
      .refreshAccessToken()
      .then(data => {
         res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn,
         })
      })
      .catch(err => {
         console.log(err)
         res.status(400).json({
            message: err
         })
      })
}
module.exports = { Login, Refresh }