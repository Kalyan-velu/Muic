const express = require('express');
const cors = require("cors")
const {
  ArtistRouter,
  AuthRouter,
  UserRouter,
  SongRouter
} =require ("./routes");
require("dotenv/config")

const app = express()
app.use(cors())
app.options('*', cors());
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

app.use('/api/v1', AuthRouter)
app.use('/api/v1', ArtistRouter)
app.use('/api/v1/songs', SongRouter)
app.use('/api/v1/user', UserRouter)

app.get('/', (req, res) => {
  res.json({
    message: "Fuck You"
  })
})
const PORT = process.env.PORT || 8000
app.listen(PORT, async () => {
  try {
    console.log(`Server is running at port ${PORT}`)
  } catch (error) {
    console.log(error)
  }
})