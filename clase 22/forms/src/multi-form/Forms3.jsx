import React, { useState } from 'react'
import Login from './Login';
import PersonalInfo from './PersonalInfo';
import About from './About';

const Forms3 = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        user: "",
        password: "",
        confirmPassword: "",
        name: "",
        lastname: "",
        about: "",
    })

    const formTitles = ["Login", "Personal Info", "About"];

    const DisplaySteps = () => {
        if(step === 0){
            return <Login formData={formData} setFormData={setFormData}/>
        }else if(step === 1){
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
        }else{
            return <About formData={formData} setFormData={setFormData}/>
        }
    }

  return (
    <div className='form'>
        <div className="progressbar">
            <div style={{width: step === 0 ? "33.3%" : step === 1 ? "66.6%": "100%"}}></div>
        </div>
        <div className="form-container">
            <div className="header">
                <h1>{formTitles[0]} </h1>
            </div>
            <div className="body">
                {DisplaySteps()}
            </div>
            <div className="footer">
                <button disabled={step === 0} onClick={() => setStep((currentStep) => currentStep - 1)}>PREV</button>
                <button onClick={() => {
                    if(step === formTitles.length - 1){
                        alert("form submitted!")
                        console.log(formData)
                    }else{
                        setStep((currentStep) => currentStep + 1)
                    }
                }}>{step === formTitles.length - 1 ? "SUBMIT": "NEXT"} </button>
            </div>
        </div>
    </div>
  )
}

export default Forms3