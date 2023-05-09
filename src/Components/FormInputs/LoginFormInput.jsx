import React from 'react'
import { useState } from 'react';

const LoginFormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label, errorMessage, errorMailMessage, onChange, id, ...inputProps} = props;

    const handleFocused = (e) => {

    }
    
  return (
    <div className='container mt-5 signup-form-input float-start'>
        <label 
          className="form-label col-12">
          {label}
        </label>
        <input {...inputProps} 
            onChange={onChange} 
            onBlur={handleFocused}
            onFocus={() => inputProps.name === "email" && setFocused(true)}
            focused={focused.toString()}
            className="form-control col-3"
        />
        {/* <div class="alert alert-secondary invisible" role="alert">
          {errorMessage}
        </div> */}
    </div>
  )
}

export default LoginFormInput