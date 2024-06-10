import React, { useState } from 'react'

const FormInput = (props) => {
    const [focus, setFocus ] = useState(false)

    const {label, errorMessage, handleOnChange, id, ...otrasProps} = props;

  return (
    <div className='formInput'>
        <label>{label}</label>
        <input onChange={handleOnChange} onBlur={() => setFocus(true)} focused={focus.toString()} {...otrasProps} />
        {errorMessage && <span>{errorMessage} </span>}
    </div>
  )
}

export default FormInput