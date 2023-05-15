import React from 'react'
import IconTache from '../Components/IconTaches/IconTache';
import { useState } from 'react';
import LoginFormInput from '../Components/FormInputs/LoginFormInput';
import { NavLink } from 'react-router-dom'

const LoginForm = (props) => {
  const myStyleLink = {
    fontStyle: "italic",
    color:"blue",
    fontSize:"12px"
  }

  const [values, setValues] = useState({// déclaration des valeurs des variables d'état
      email: "",
      password: "",
  });
  
  const inputs = [
        {
          id: 1,
          name: 'email',
          type: 'text',
          placeholder: 'Email',
          errorMessage: "Email mal saisi ou inconnu",
          errorMailMessage: "email inconnu",
          label: 'Email',
          pattern: "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
          required: true, 
        },
        {
          id: 2,
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          errorMessage: "Password inconnu ou mal saisi",
          label: 'Password',
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$`,
          required: true, 
        },
  ];
      
  const handleLogin = async (e) => {
        e.preventDefault();
        // Send a POST request
      const res = await fetch("http://localhost:5000/api/auth/login",{
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
    })
    const data = await res.json();
    if(res.ok){
      localStorage.setItem('token', data.token);
      // return data.user
      window.location.href = "/accueil";

    }else {throw('Error signin')};

  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
        <div className='col-6 d-flex justify-content-evenly'>
        < IconTache />
        </div>
        <div className='register-form col-6 flex-column justify-content-start'>
            <form className ="col-12 needs-validation" action='' onSubmit={handleLogin} id="login-form">
                {inputs.map((input) => (
                    <LoginFormInput 
                    key={input.id} 
                    {...input} 
                    value={values[input.name]}
                    onChange={onChange}/>
                ))}
                <input className="btn btn-primary mt-3" type="submit" value="Se connecter" /> 
            </form>
            <NavLink className="nav-link col-12 text-center mt-5" style={myStyleLink} to="/signup">Pas encore de compte ?</NavLink>
        </div>
    </div>
  )
}

export default LoginForm;
