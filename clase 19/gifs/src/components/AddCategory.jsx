import React, { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue ] = useState('')

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
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder='Buscar gifs...'
        onChange={onInputChange}
        value={inputValue}
        />
    </form>
  )
}
