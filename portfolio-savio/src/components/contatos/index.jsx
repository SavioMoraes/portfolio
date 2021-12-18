import React from 'react';
import './contatos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Contatos() {
  return (
    <section className="contatos-container">
      <h2 className="contatos-title">Contatos</h2>
      <div className="contatos">
        <div className="contato">
          <a href="https://www.linkedin.com/in/saviomoreirademoraes/" target="_blank" rel = "noreferrer" alt="linkedin">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="contact-icon" />
          </a>
        </div>
        <div className="contato">
          <a href="https://api.whatsapp.com/send?phone=5547999323225&text=Texto%20aqui" target="_blank" rel = "noreferrer" alt="whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
        </div>
        <div className="contato">
          <a href="https://github.com/SavioMoraes" target="_blank" rel = "noreferrer" alt="github">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contatos;
