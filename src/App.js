import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import CreateToDoListe from './Page/CreateToDoListe';
import ConsultToDoList from './Page/ConsultToDoListe';
import LoginForm from './Page/LoginForm';
import SignupForm from './Page/SignupForm';
import Accueil from './Page/Accueil';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
