import axios from "axios"

export const getGifs = async(endpoint, info) => {
    const base_url = "https://api.giphy.com/v1/";

    let url;

    switch(endpoint){
        case "search":
         url = `${base_url}gifs/search?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL&q=${info}&limit=25&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`;
        break;
        default:
        throw new Error("invalid endpoint")
    }

    // const url = `gifs/search?api_key=gn0sGB2hAGGGMrp61CZjLf4T88oZqkgL&q=${category}&limit=25&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`;

    return axios.get(url)
    .then((res) => {
        // console.log(res)
        return res.data.data
        // .map(img => ({
        //     id: img.id,
        //     title: img.title,
        //     url: img.images.original.url
        // }))
    })
}