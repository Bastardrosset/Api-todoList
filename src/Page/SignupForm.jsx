import React, { useState } from 'react';
import IconTache from '../Components/IconTaches/IconTache';
import SignupFormInput from '../Components/FormInputs/SignUpFormInput';


const SignupForm = () => {

  const [values, setValues] = useState({
    pseudo: "",
    email: "",
    password: "",
  })

  const inputs = [
    {
      id: 1,
      name: "pseudo",
      type: "text",
      placeholder: "Pseudo",
      errorMessage: "Pseudo doit être entre 3-55 sans caractères spécial",
      label: "Pseudo",
      pattern: "^[A-Za-z0-9]{3,55}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "Email doit être valide",
      label: "Email",
      pattern: "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password doit être minimun de 6 avec 1 nombre et 1 caractère spècial",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$`,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    fetch("http://localhost:5000/api/auth/register",{
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        values
      })
    }

  )}


  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
        <div className='col-6 d-flex justify-content-evenly'>
        < IconTache />
        </div>
        <div className='register-form col-6 flex-column justify-content-start'>
          <form className ="form col-12" action="" onSubmit={handleRegister} id="register-form">
            {inputs.map((input) => (
              <SignupFormInput 
                key={input.id} 
                {...input} 
                value={values[input.name]}
                onChange={onChange}/>
            ))}
            <input className="btn btn-primary mt-3" type="submit" value="Valider inscription" />
          </form>
        </div>
    </div>

  )
}

export default SignupForm
