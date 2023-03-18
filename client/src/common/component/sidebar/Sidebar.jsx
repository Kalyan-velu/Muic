import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeadphonesAlt,
    faHeart, faPlay,
    faPlayCircle, faRightFromBracket,
    faSearch, faStream,
} from '@fortawesome/free-solid-svg-icons';
import './_sidebar.scss'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "../buttons/Link.jsx";
import Avatar from "../avatar";
import {motion} from "framer-motion";
import {LogOut} from "../../../features/actions/UserActions.js";
import {useNavigate} from "react-router-dom";
import classes from "../../../routes/login/styles/Login.module.css";

const renderSidebarOptions = (link, icon, text = {}) => {
return(
    <NavLink
        to={link}
        className={'sidebar__option'}
        active={'sidebar__option--selected'}
    >
        <FontAwesomeIcon icon={icon}/>
        <p>{text}</p>
    </NavLink>
)
}

function Sidebar() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {currentUser:user}=useSelector((state) => state.auth)

    function handleLogout() {
        dispatch(LogOut({navigate}))
    }

    return(
        <div className="sidebar">
            <div className={'sidebar__logout'}>
                <motion.button
                    whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleLogout}
                    className={"sidebar__logout__btn"}
                >
                    <FontAwesomeIcon title={"Logout"} icon={faRightFromBracket} className={'sidebar__logout__btn__logo'} />
                </motion.button>
            </div>
            <div className="sidebar__profile">
                <Avatar
                    className={"sidebar__profile__avatar"}
                    name={user?.display_name}
                    url={user?.images[0]?.url}
                />
                <p>{user?.display_name}</p>
            </div>
            <div className="sidebar__options">
                {renderSidebarOptions('/discover',faHeadphonesAlt,'Discover')}
                {renderSidebarOptions('/search',faSearch,'Search')}
                {renderSidebarOptions('/analysis',faStream,'Analysis')}
                {renderSidebarOptions('/podcasts',faPlayCircle,'Podcasts')}
                {renderSidebarOptions('/playlists',faPlay,'Playlists')}
            </div>
        </div>
    )
}
export default Sidebar