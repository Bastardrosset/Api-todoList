import React from 'react';
import { BrowserRouter, Routes, Route,Link, Navigate } from 'react-router-dom';
import CreateToDoListe from './CreateToDoListe';
import IconTache from '../Components/IconTaches/IconTache';

import Bouton from '../Components/Bouton/Bouton';

const Accueil = () => {
  return (
    <>
      <div className='container mt-3'>
        <div className='d-flex align-items-center justify-content-center mt-5 mb-5'>
        < IconTache />
          <h1>To-Do_liste</h1>
        </div>
        <div className='row col-12 d-flex navigation'>
          <Link to="/task" className='row d-flex mt-3 navigation text-decoration-none'>
            <Bouton typeBtn="btn-primary" css="col-5">Créer une nouvelle tache</Bouton>
          </Link>
          <Link to="/list" className='row d-flex mt-3 navigation text-decoration-none'>
            <Bouton typeBtn="btn-success" css="col-5">Consulter les taches</Bouton>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Accueil;
