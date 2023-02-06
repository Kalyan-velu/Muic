import React from  'react'
import Button from "../buttons/Button.jsx";
import {useNavigate} from "react-router-dom";
import './Navigate.css'
import {BiLeftArrow, BiRightArrow} from "react-icons/bi";
export function Navigate(){
    const navigate=useNavigate()
    const style={

    }
    const previous = () => {
        navigate(-1)
    }
    const next = () => {
        navigate(+1)
    }
    return(
        <div className='btn-container'>
            <Button onClick={previous} title={"Previous"} className='nav-btn'><BiLeftArrow style={style}/></Button>
            <Button onClick={next} title={"Next"} className='nav-btn'><BiRightArrow style={style}/></Button>
        </div>
    )
}