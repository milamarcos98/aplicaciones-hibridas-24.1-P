import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import ClockLoader from "react-spinners/ClockLoader"

export const Random = () => {
  const {images, isLoading } = useFetchGifs("random");
  console.log(images)
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
