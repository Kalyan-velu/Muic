import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { Me } from "../actions/UserActions"

export default function useAuth(code,navigate) {
  const dispatch = useDispatch()
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [expiresIn, setExpiresIn] = useState('')

  async function Login() {
    try {
      const { data } = await axios.post("http://localhost:8000/api/login", { code, })
      setAccessToken(data.accessToken)
      setRefreshToken(data.refreshToken)
      setExpiresIn(data.expiresIn)
      window.history.pushState({}, null)
      navigate('/dashboard')
      dispatch({ type: "SET_REFRESH_TOKEN", payload: data.refreshToken })
      dispatch({ type: "SET_ACCCESS_TOKEN", payload: data.accessToken })
      dispatch(Me())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Login()
  }, [])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() => {
      axios
        .post("http://localhost:8000/api/refresh", {
          refreshToken,
        })
        .then(res => {
          console.log(res)
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
          dispatch({ type: "SET_ACCCESS_TOKEN", payload: res.data.accessToken })
        })
        .catch(() => {
          window.location = "/"
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}