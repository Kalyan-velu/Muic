import { useEffect } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import AllRoutes from './routes/AllRoutes'
import { useDispatch } from 'react-redux'

const code = new URLSearchParams(window.location.search).get('code')
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
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
