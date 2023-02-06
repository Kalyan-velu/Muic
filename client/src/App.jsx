import { useEffect } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import AllRoutes from './routes/AllRoutes'
import {useDispatch, useSelector} from 'react-redux'
import MobileNavbar from "./component/navbar/mobile/MobileNavbar.jsx";

const code = new URLSearchParams(window.location.search).get('code')
function App() {
  const dispatch = useDispatch()
    const {code:cd}=useSelector(state => state.auth)
  useEffect(() => {
    if (code) {
      dispatch({ type: "SET_CODE", payload: code })
    }

  }, [dispatch, code])

  return (
    <div className="App">
      <Navbar />
      <AllRoutes code={code} />
        {cd && <MobileNavbar/>}
    </div>
  )
}

export default App