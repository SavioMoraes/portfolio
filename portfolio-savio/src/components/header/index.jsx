import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import Web from './web-menu';
import Mobile from './mobile-menu';
import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Portfólio</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className='mobile-menu'>
          <div onClick = { () => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faThLarge} size="lg"/>
          </div>
          { isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
