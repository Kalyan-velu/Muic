import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"

export default function useAuth(code,navigate) {
  const dispatch = useDispatch()
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [expiresIn, setExpiresIn] = useState('')

  async function Login() {
    try {
      const { data } = await axios.post("http://localhost:8000/api/v1/login", { code, })
      setAccessToken(data.accessToken)
      setRefreshToken(data.refreshToken)
      setExpiresIn(data.expiresIn)
      window.history.pushState({}, null)
      navigate('/discover')
      dispatch({ type: "SET_REFRESH_TOKEN", payload: data.refreshToken })
      dispatch({ type: "SET_ACCCESS_TOKEN", payload: data.accessToken })
      dispatch({ type: "SET_CURRENT_USER", payload: data.user })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Login().then((r)=>{console.log(r)})
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
        .post("http://localhost:8000/api/v1/refresh", {
          refreshToken,
        })
        .then(res => {
          console.log("Refresh Token")
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
          dispatch({ type: "SET_ACCCESS_TOKEN", payload: res.data.accessToken })
        })
        .catch(() => {
          navigate('/')
        })
    }, (expiresIn - 60))

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}