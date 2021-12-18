import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

function Footer() {
  return (
    <header className="footer">
      <h5 className="footer-text">
        Desenvolvido por @SavioMoraes 
        <FontAwesomeIcon className="phone-icon" icon={faPhoneSquareAlt} size="lg" /> 
        +55 47 99932-3225
      </h5>
    </header>
  );
}

export default Footer;
