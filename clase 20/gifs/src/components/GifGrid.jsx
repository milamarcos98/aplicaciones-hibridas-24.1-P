import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import ClockLoader from "react-spinners/ClockLoader"

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs("search", category)
  return (
    <div>
        {
            isLoading ? (<ClockLoader color="#d076cf" />) :

            (<>
                <h3>{category}</h3>
                <div className='card-grid'>
                    {
                        images.map((image) => (
                            <GifItem key={image.id} id={image.id} title={image.title} url={image.images.original.url} />
                        ))
                    }
                </div>
            </> )
        }
       
       
    </div>
  )
}
