import React, { useState } from 'react'

const Forms = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log("Email:", email)
    console.log("Password:", password)

    const errorMessage = validate(email, password)
    console.log(errorMessage)

  return (
    <form>
        <input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)}/>
        { errorMessage?.type == "email" && (<p style={{color: "red"}}>{errorMessage.message} </p>)}
        <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)}/>
      { errorMessage?.type == "password" && (<p style={{color: "red"}}>{errorMessage.message} </p>)}
    </form>
  )
}

export default Forms


const validate = (email, password) => {
    if(!email.includes('@')) return {type: "email", message:'Email incorrecto!'}
    if(password.length < 4) return {type: "password", message: 'Contraseña incorrecta!'}
}