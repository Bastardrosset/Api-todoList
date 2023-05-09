import React from 'react';
import IconListe from '../../assets/icons/liste.svg';


const IconTache = (props) => {
    
        const myStyleIcon = {
            width:"100px",
            height:"auto"
        }
    
  return (
    <div>
      <img className='img-fluid' style={myStyleIcon} src={IconListe} alt="Icon d'une liste" />
    </div>
  )
}

export default IconTache;
