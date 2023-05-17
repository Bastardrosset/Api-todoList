import React from 'react';
import IconTache from '../IconTaches/IconTache';

import { NavLink } from 'react-router-dom';
import Logout from '../Auth/Logout'
  const myStyleFontNav = {
    fontWeight:"bolder",
    fontSize:"20px",
    color:"white"
  }
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <NavLink className="nav-link col-4" aria-current="page" to="/accueil"><IconTache/></NavLink>
                    <NavLink className="nav-link col-12" style={myStyleFontNav} aria-current="page" to="/list">Consulter toDo-List</NavLink>
                    <NavLink className="nav-link col-12" style={myStyleFontNav} to="/task">Nouvelle tache</NavLink>
                </div>
            </div>
        </div>
        <div className="">
          <Logout/>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
