import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
      <h3 className='text-center mt-2'>Détail de la tache</h3>
        <p>{task.pseudo}</p>
        <p>{task.name}</p>
    </div>
  )
}
