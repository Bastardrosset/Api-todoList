import React, {Component} from 'react';
import Navbar from '../Components/NavBar/Navbar';
import Table from 'react-bootstrap/Table';

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
              <th>Task</th>
              <th>priority</th>
              <th>Description</th>
              <th>Status</th>
              <th>Start date</th>
              <th>Category</th>
              <th>To do before</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>hfdkgdslorh</td>
              <td>ezhuzehuo</td>
              <td>ezoihzueovhu</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td> 
            </tr>
            
            <tr>
              <td>2</td>
              <td colSpan={1}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        </div>
      </>
    );
  }
}

export default ConsultToDoListe;

