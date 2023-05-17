import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconTache from '../Components/IconTaches/IconTache';

import Bouton from '../Components/Bouton/Bouton';
import Logout from '../Components/Auth/Logout'

const Accueil = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await  fetch("http://localhost:5000/api/users/", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: 'Bearer token'
        }, 
      })
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log('Une erreur s\'est produite lors de la récupération des utilisateurs.', error);
    }
  };

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
      <div className="container mt-5">
        <h5>Liste des utilisateurs enregistrés</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Pseudo</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
              <tr key={user._id}>
                <th scope="row">{user.pseudo}</th>
                <td>{user.email}</td>
                <td>{user.isAdmin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Accueil;
