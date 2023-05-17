import React, {Component} from 'react';
import Navbar from '../Components/NavBar/Navbar';
import Table from 'react-bootstrap/Table';
import IconEdite from '../Components/IconEdites/IconEdite';
import { NavLink } from 'react-router-dom';

class ConsultToDoListe extends Component {
  render() {

    return (
      <>
      <Navbar />
        <div className='res'>
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mis à jour le</th>
              <th>Pseudo</th>
              <th>Email</th>
              <th>Tache</th>
              <th>Priorité</th>
              <th>Voir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>hfdkgdslorh</td>
              <td>ezhuzehuo</td>
              <td>ezoihzueovhu</td>
              <td>1</td>
              <td>1</td>
              <td><NavLink className="nav-link col-12" aria-current="page" to="/cardTask"><IconEdite/></NavLink>
</td> 
            </tr>
          </tbody>
        </Table>
        </div>
      </>
    );
  }
}

export default ConsultToDoListe;

