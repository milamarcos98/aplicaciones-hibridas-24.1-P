import React from 'react'

// atomizar
const Button = ({text, onClick, style, color}) => {
  return (
    <div className={'btn btn-' + color} style={style} onClick={onClick}>
        {text}
    </div>
  )
}

export default Button