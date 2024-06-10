import React from 'react'

const About = ({formData, setFormData}) => {
  return (
    <div>
        <input type="text" name="about" placeholder='about...' value={formData.about} onChange={(e) => setFormData({...formData, about: e.target.value})} />
      
    </div>
  )
}

export default About