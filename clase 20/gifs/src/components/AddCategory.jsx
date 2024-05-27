import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import useDebounce from '../hooks/useDebounce'

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue ] = useState('')
    const [autocomplete, setAutocomplete ] = useState([])

    const debouncedInputValue = useDebounce(inputValue, 2000)

    const getAutocomplete = async () => {
      let options = await getGifs("autocomplete", debouncedInputValue)
      setAutocomplete(options)
    }

    useEffect(() => {
      getAutocomplete()
    }, [debouncedInputValue]);

    const handleClick = (category) => {
      onAddCategory(category)
      setAutocomplete([])
      setInputValue("")
    }

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 2) return;
        onAddCategory(inputValue.trim())
        setInputValue('')
    }

  return (
   <div className='categories-container'>
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder='Buscar gifs...'
        onChange={onInputChange}
        value={inputValue}
        />
          </form>
        {
          autocomplete.length > 0 && (
            <ul className='autocomplete'>
              {
                autocomplete.map((option) =>(
                  <li onClick={() => handleClick(option.name)} 
                  key={option.name}>{option.name}</li>
                  ))
                }
            </ul>
          )
        }
        </div>
  )
}
