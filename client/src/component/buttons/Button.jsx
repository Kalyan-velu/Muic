import React from 'react'

const Button = ({ className, onClick, children,title }) => {
   const style = {
      cursor: 'pointer',
      border: 'none'
   }
   return (
      <button style={style} title={title} className={className} onClick={onClick} >{children}</button>
   )
}

export default Button