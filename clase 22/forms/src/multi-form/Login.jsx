import React from 'react'

const Login = ({formData, setFormData}) => {
  return (
    <div>
        <input type="email" name="email" placeholder='email...' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="text" name="user" placeholder='user...' value={formData.user} onChange={(e) => setFormData({...formData, user: e.target.value})} />
        <input type="password" name="password" placeholder='password...' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <input type="password" name="confirmPassword" placeholder='confirmPassword...' value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
    </div>
  )
}

export default Login