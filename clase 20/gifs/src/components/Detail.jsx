import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchGifs } from '../hooks/useFetchGifs'
import ClockLoader from "react-spinners/ClockLoader"

export const Detail = () => {
  const {id} = useParams()

  const {images, isLoading } = useFetchGifs("id", id);

  return (
    <>
    {
      isLoading ? (<ClockLoader color="#d076cf" />) :
      (<div className='card'>
        <img src={images.images.original.url} alt={images.title} />
        <p>{images.title}</p>
      </div>)
    }
    </>
  )
}
