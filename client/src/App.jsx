import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import AllRoutes from './routes'
import CoreLayout from "./common/layouts/CoreLayout/CoreLayout.jsx";

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
      <CoreLayout>
        <AllRoutes />
      </CoreLayout>
    </div>
  )
}

export default App