var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

const Artists = async (req, res) => {
   try {
      const { data } = await spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
      console.log('Artist information', data.body);
   } catch (error) {
      console.log(error)
   }
}

module.exports = { Artists }