import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (endpoint, info) => {
    const [images, setImages ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(endpoint, info);
        setTimeout(() => {
            setImages(newImages)
            setIsLoading(false)
        }, 2000)
    }

    useEffect(() => {
        getImages();
    }, [])

    return{
        images, 
        isLoading
    }

}