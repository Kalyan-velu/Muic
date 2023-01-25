import { useEffect } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import AllRoutes from './routes/AllRoutes'
import { useDispatch } from 'react-redux'

const code = new URLSearchParams(window.location.search).get('code')
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // const hash = window.location.hash
    // if (hash) {
    //   const code = hash.substring(1).split("&")[0].split("=")[1]
    //   console.log(code)
    //   dispatch({ type: "SET_TOKEN", payload: code })
    // }
    if (code) {
      dispatch({ type: "SET_CODE", payload: code })
    }

  }, [dispatch, code])



  return (
    <div className="App">
      <Navbar />
      <AllRoutes code={code} />
    </div>
  )
}

export default App
