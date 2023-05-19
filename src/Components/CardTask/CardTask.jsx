import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'

export default function CardTask() {

  const [task, setTask] = useState(null);
  const {id} = useParams()
  
  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: 'Bearer token'
      }
    })
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((error) => {
        console.error('Erreur dans le chargement de la tache', error);
      });
  }, [id]);

  if(!task) {
    return <div>
      error
    </div>
  }

  return (
    <>
    <Navbar/>
      <div>
        <h3 className='text-center mt-2'>Détail de la tache</h3>
        <div className='d-flex flex-column flex-wrap m-5 p-5'>
          <div className='d-flex flex-column flex-md-row'>
            <h5 className='me-5'>Pseudo: {task.pseudo}</h5>
            <p>Nom de la tache: {task.name}</p>
          </div>
          <div className=''>
            <p>Description: {task.description}</p>
          </div>
          <div className='d-flex flex-column flex-md-row'>
            <p className='me-3'>Début prévu: {task.startDate}</p>
            <p className='me-3'><span className='text-danger fw-bolder me-1'>*</span>Status: {task.status}</p>
            <p className='me-3'>Priorité: {task.priority}</p>
            <p className='me-3'>DeadLine: {task.deadline}</p>
          </div>
        </div>
      </div>
    </>
  )
}
