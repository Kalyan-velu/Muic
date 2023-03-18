import axios from "axios";

export const api = axios.create({ baseURL: "http://localhost:8000/api/v1" })
api.interceptors.request.use(req => {
   if (localStorage.getItem('token')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      return req
   }
})