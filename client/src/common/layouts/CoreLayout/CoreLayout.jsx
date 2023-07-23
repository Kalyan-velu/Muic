import React from 'react'
import Sidebar from "../../component/sidebar/Sidebar.jsx";
import {useSelector} from "react-redux";

const CoreLayout = ({children}) => {
    const {code}=useSelector(state => state.auth)
  return(
    <div className={code?"main":"main__nlog"}>
        {code?<Sidebar/>:null}
        <div className={code?"main__content":"main__nlog__content"}>

        <div className="main__content__child">
            {children}
        </div>
        </div>
    </div>
  )
}
export default CoreLayout