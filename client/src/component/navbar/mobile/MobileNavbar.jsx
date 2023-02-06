import React from 'react'
import './MobileNav.css'
import {AiFillHome, AiOutlineSearch} from "react-icons/ai";
import {BsCardList} from "react-icons/bs";
import {NavLink} from "react-router-dom";
const MobileNavbar=()=>{

    return(
        <nav className={'m-navbar'}>
            <ul>
                <NavLink to={'/'} className={({isActive})=>isActive?'m-link active':'m-link'}><AiFillHome/></NavLink>
                <NavLink to={'/search'} className={({isActive})=>isActive?'m-link active':'m-link'}><AiOutlineSearch/></NavLink>
                <NavLink to={'/playlist'} className={({isActive})=>isActive?'m-link active':'m-link'}><BsCardList/></NavLink>
            </ul>
        </nav>
    )
}

export default MobileNavbar