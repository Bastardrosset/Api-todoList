import React from 'react'

const Logout = () => {
  
  const myStyleOff = {
    listStyleType: "none"
  }
    const logout = async () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location = "/";// redirige vers home
    }

  return (
    <div className="postion-relative">
      <li onClick={logout} style={myStyleOff} className='position-absolute top-0 end-0'>
        <i className="fas fa-power-off mt-3 me-3"></i>
      </li>
    </div>
  )
}

export default Logout
