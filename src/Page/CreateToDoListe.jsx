import React from 'react'
import Navbar from '../Components/NavBar/Navbar';
import { useState } from 'react';
import ListUser from '../Components/ListUsers/ListUser';

const CreateToDoListe = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [name, setNomTache] = useState('');
    const [category, setCategorie] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [startDate, setStartDate] = useState('');
    const [deadline, setLimitDate] = useState('');
    const [update, setUpdate] = useState('');

    
    const pseudoChange = (e) =>{
        setPseudo(e.target.value)
    }
    const emailChange = (e) =>{
        setEmail(e.target.value)
    }
    const nomTacheChange = (e) =>{
        setNomTache(e.target.value)
    }
    const categorieChange = (e) =>{
        setCategorie(e.target.value)
    }
    const descriptionChange = (e) =>{
        setDescription(e.target.value)
    }
    const priorityChange = (e) =>{
        setPriority(e.target.value)
    }
    const statutChange = (e) =>{
        setStatus(e.target.value)
    }
    const startDateChange = (e) =>{
        setStartDate(e.target.value)
    }
    const limiteDateChange = (e) =>{
        setLimitDate(e.target.value)
    }
    const updateChange = (e) =>{
        setUpdate(e.target.value)
    }
    const formSubmit = async (e) =>{
    e.preventDefault()
    await fetch("http://localhost:5000/api/posts/create",{
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: 'Bearer token'
        },
        body: JSON.stringify({
          pseudo,
          email,
          name,
          category,
          description,
          priority,
          status,
          startDate,
          deadline,
          update,
        })
      }
    )}
  return (  
    <>
    <Navbar/>
    <div className="container lg d-flex flex-column justify-content-center align-items-center mt-5">
         <form className="form row md-3" onSubmit={formSubmit}>
            <div className="row mt-4 ">
                <div className="col-md-3 mt-2">
                    <label className="form-label me-2" htmlFor="update">Mis à jour le:</label>
                    <input 
                    type="date" 
                    id="update" 
                    name="trip-start" 
                     min="2023/05/20" 
                     max="2023/03/30" 
                     onChange={updateChange} />
                </div>
            </div>
            <div className='container'>
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-md-4">
                        <label htmlFor="pseudo" className="form-label">Pseudo</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="pseudo" 
                        onChange={pseudoChange} 
                        required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        onChange={emailChange} 
                        required />
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-evenly">
                    <div className="col-md-4 ">
                        <label htmlFor="nomTache" className="form-label">Tache</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="nomTache" 
                        onChange={nomTacheChange} 
                        required />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="prioriteTache" className="form-label">Prioritée</label>
                            <select 
                            className="form-select" 
                            id="prioriteTache" 
                            onChange={priorityChange} 
                            required>
                                <option disabled value=""></option>
                                <option></option>
                                <option value={1}>Basse</option>
                                <option value={2}>Moyenne</option>
                                <option value={3}>Haute</option>
                            </select>
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-md-8">
                        <label htmlFor="descriptionTache" className="form-label">Description</label>
                        <textarea 
                        type="text" 
                        className="form-control" 
                        id="descriptionTache" 
                        rows="3" 
                        onChange={descriptionChange} 
                        required>
                        </textarea>
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-evenly">
                    <div className="col-md-3">
                        <label htmlFor="statutTache" className="form-label">Statut</label>
                            <select 
                            className="form-select" 
                            id="statutTache" 
                            onChange={statutChange} 
                            required>
                                <option disabled value={1}></option>
                                <option value={1}>En attente</option>
                                <option value={2}>En cours</option>
                                <option value={3}>Fini</option>
                        </select>
                    </div>
                    <div className="col-md-2 mt-2">
                        <label className="form-label me-2" htmlFor="start">Start date:</label>
                        <input 
                        type="date" 
                        id="start" 
                        name="trip-start" 
                        min="2023/05/20" 
                        max="2023/03/24" 
                        onChange={startDateChange} 
                        required />
                    </div>
                    
                    <div className="col-md-3 mt-2">
                        <label htmlFor="categorieTache" className="form-label">Catégorie</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="categorieTache" 
                        onChange={categorieChange} 
                        required />
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center align-items-center">
                    <div className="col-md-3">
                        <label htmlFor="effectuerAvTache" className="form-label">A éffectuer avant le:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="effectuerAvTache" 
                        onChange={limiteDateChange} 
                        required />
                    </div>
                </div>
                <div className="col-12 mt-5 d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary col-6" type="submit">Envoyer</button>
                </div>
            </div>
        </form>
    </div>
    <div className='user-list'>
        <ListUser />
    </div>
    </>
  )
}

export default CreateToDoListe;