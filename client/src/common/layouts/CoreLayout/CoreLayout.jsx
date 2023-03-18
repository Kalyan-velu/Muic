import React from 'react'
import Sidebar from "../../component/sidebar/Sidebar.jsx";
import {useSelector} from "react-redux";

const CoreLayout = ({children}) => {
    const {code}=useSelector(state => state.auth)
  return(
    <div className={"main"}>
        {code?<Sidebar/>:null}
        <div className="main__conntent_child">
            {children}
        </div>
    </div>
  )
}
export default CoreLayout