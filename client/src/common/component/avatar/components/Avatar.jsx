import React from 'react';
const Avatar=({name,url,className})=>{
    return(
        <div className={className}>
            <img alt={name} src={url}/>
        </div>
    )
}
export default Avatar