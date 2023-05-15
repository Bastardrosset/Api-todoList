import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateToDoListe from './Page/CreateToDoListe';
import ConsultToDoList from './Page/ConsultToDoListe';
import LoginForm from './Page/LoginForm';
import SignupForm from './Page/SignupForm';
import Accueil from './Page/Accueil';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UidContext } from './Components/App.context'

function App() {

  const uid = useContext(UidContext)
  
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/accueil' exact Component={Accueil} />
        <Route path='/' exact Component={LoginForm} />
        <Route path='/signup' exact Component={SignupForm} />
        <Route path='/task' exact Component={CreateToDoListe} />
        <Route path='/list' exact Component={ConsultToDoList} />
      </Routes>
    </BrowserRouter>
    
  </> 
  );
}

export default App;
