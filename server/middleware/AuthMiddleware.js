const authMiddleware = (req,res,next) => {
  try{
      const token=req.headers.authorization.split(' ')[1]
      req.token=token
      next()
  }catch (e) {
    console.log(e)
      res.status(511).json({
          message:e
      })
  }
}
module.exports= {authMiddleware}