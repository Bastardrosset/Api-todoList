import React from 'react'
import IconEditing from '../../assets/icons/editer.svg'

const IconEdite = (props) => {
    const myStyleIcon = {
        width:"20px",
        height:"auto"
    }

  return (
    <div>
      <img className='img-fluid' src={IconEditing} style={myStyleIcon} alt="Icon d'une liste à modifier"></img>
    </div>
  )
}

export default IconEdite
