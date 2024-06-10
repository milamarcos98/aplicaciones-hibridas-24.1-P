import React from 'react'

const PersonalInfo = ({formData, setFormData}) => {
  return (
    <div>
        <input type="text" name="name" placeholder='name...' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="text" name="lastname" placeholder='lastname...' value={formData.lastname} onChange={(e) => setFormData({...formData, lastname: e.target.value})} />
    </div>
  )
}

export default PersonalInfo