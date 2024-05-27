import React from 'react'
import { Link } from 'react-router-dom'

export const GifItem = ({title, url, id}) => {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <Link to={`/detail/${id}`}><p>{title}</p></Link>
    </div>
  )
}
