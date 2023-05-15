import React from 'react';
import { Link } from 'react-router-dom';
import IconTache from '../Components/IconTaches/IconTache';

import Bouton from '../Components/Bouton/Bouton';
import Logout from '../Components/Auth/Logout'

const Accueil = () => {
  return (
    <>
    <Logout/>
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
