import React, { useState } from 'react';
import LoginForm from '../../Page/LoginForm';
import SignupForm from '../../Page/SignupForm';


const Auth = (props) => {
    const [signupModal, setSignupModal] = useState(props.signup);
    const [loginModal, setLoginModal] = useState(props.login);

    const handleModals = (e) => { //recupère l'évenement (e) clické
        if (e.target.id === "auth") { // if, soit setLoginModal soit setSignUpModal, Toogle
            setLoginModal(false); 
            setSignupModal(true);
        } else if (e.target.id === "login") {
            setSignupModal(false);
            setLoginModal(true);
        }
    }
  return (
    <div className='connection-form'>
            <div className='form-container'>
                <ul>
                    <li onClick={handleModals} // onClick button s'inscrire lance la function handlModals, verifie id auth pour s'inscrire
                        id="auth" className={signupModal ? 'active-btn' : null}>S'inscrire
                    </li>
                    <li onClick={handleModals} // button se connecter lance la function handlModals, verifie id login pour se connecter
                        id="login" className={loginModal ? 'active-btn' : null}>Se connecter
                    </li>
                </ul>
                {signupModal && <SignupForm />} 
                {loginModal && <LoginForm />}
            </div>
        </div>
  )
}

export default Auth
