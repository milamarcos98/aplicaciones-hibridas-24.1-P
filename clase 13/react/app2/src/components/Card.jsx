import React from 'react'

const Card = ({children, title}) => {
  return (
    <div style={{border: 'solid 1px black', boxShadow: '2px 2px 6px 0 grey'}}>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default Card

// rafce