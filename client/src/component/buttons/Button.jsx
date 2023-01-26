import React from 'react'

const Button = ({ className, onClick, children }) => {
   const style = {
      cursor: 'pointer',
      border: 'none'
   }
   return (
      <button style={style} className={className} onClick={onClick} >{children}</button>
   )
}

export default Button