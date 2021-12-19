import React from 'react';
import './hard-skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';

function HardSkills() {
  return (
    <section className="hard-skills">
      <h2 className="hard-skills-title">Hard Skills</h2>
      <div className="hard-skills-icons">
        <div className="hard-skills-icon">
          <FontAwesomeIcon icon={faGit} size="lg" />
        </div>
        <div className="hard-skills-icon">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </div>
        <div className="hard-skills-icon">
          <FontAwesomeIcon icon={faHtml5} size="lg" />
        </div>
        <div className="hard-skills-icon">
          <FontAwesomeIcon icon={faCss3} size="lg" />
        </div>
        <div className="hard-skills-icon">
          <FontAwesomeIcon icon={faJs} size="lg" />
        </div>
        <div className="hard-skills-icon">
          <FontAwesomeIcon icon={faReact} size="lg" />
        </div>
        <div className="hard-skills-icon">
          <FontAwesomeIcon icon={faBootstrap} size="lg" />
        </div>
        <div className="hard-skills-icon">
          <FontAwesomeIcon icon={faNodeJs} size="lg" />
        </div>
        <div className="hard-skills-icon">
          <FontAwesomeIcon icon={faDatabase} size="lg" />
        </div>
        <div className="hard-skills-icon">
          <FontAwesomeIcon icon={faServer} size="lg" />
        </div>
      </div>
      <hr/>
    </section>
  )
}

export default HardSkills;
