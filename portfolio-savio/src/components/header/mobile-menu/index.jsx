import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import './mobile.css';


function Mobile({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close-menu" onClick = { () => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faWindowClose}/>
      </div>
      
      <div className="mobile-options">
        <div className="mobile-option" onClick = { () => setIsOpen(!isOpen)}>
          <NavLink to="/" activeClassName="selected">
            <FontAwesomeIcon icon={faHome} />Home</NavLink>
        </div>
        <div className="mobile-option" onClick = { () => setIsOpen(!isOpen)}>
          <NavLink to="/profile"><FontAwesomeIcon icon={faMale} />Perfil</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Mobile;
