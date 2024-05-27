import { useState } from 'react'
// import { getGifs } from './helpers/getGifs';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export function Home() {

  // getGifs()

  const [categories, setCategories] = useState(['One Piece']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([...categories, newCategory])
  }

  return (
    <>
    <h1>Gifs</h1>

    <AddCategory onAddCategory={(value) => onAddCategory(value)} />
    {
      categories.map((category, index) => (
        // <p key={index}>{category}</p>
        <GifGrid key={index} category={category} />
      ))
    }

    </>
  )
}

