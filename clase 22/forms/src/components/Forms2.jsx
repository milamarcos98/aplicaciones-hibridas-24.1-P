import React, { useState } from 'react'
import FormInput from './FormInput'

const Forms2 = () => {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassowrd: ""
    
    })

    const inputs =[
        {
            id: 1,
            type: "text",
            name: "username",
            label: "Username",
            placeholder: "username...",
            required: true,
            pattern: "^[A-Za-z0-9]{4,20}$",
            errorMessage: "Username debe tener entre 4 y 20 caracteres y sin caracteres especiales."
        },
        {
            id: 2,
            type: "email",
            name: "email",
            label: "Email",
            placeholder: "pepe@pepe.com",
            required: true,
            pattern: "[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+",
            errorMessage: "Debe ser un mail valido."
        },
        {
            id: 3,
            type: "password",
            name: "password",
            label: "Password",
            placeholder: "password",
            required: true,
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
            errorMessage: "Password debe tener entre 8 y 20 caracteres y al menos unba letra, un numero y un caracter especial."
        },
        {
            id: 4,
            type: "password",
            name: "confirmPassword",
            label: "Confirm Password",
            placeholder: "confirm password",
            required: true,
            pattern: values.password,
            errorMessage: "Los password son distintos."
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    const handleOnChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

  return (
    <form onSubmit={handleSubmit}>
        {
            inputs.map((input) => (
                <FormInput key={input.id} value={values[input.name]} handleOnChange={handleOnChange} {...input} />
            ))
        }
        <button>Submit</button>
    </form>
  )
}

export default Forms2
