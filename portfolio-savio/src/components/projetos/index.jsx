import React from 'react';
import ProjectList from '../projectList';
import './projetos.css';
import projects from '../../data';

class Projetos extends React.Component {
  render() {
    return (
      <div>
        <h4 className="projects-title">Projetos</h4>
        <div className="projects">
          <ProjectList projects={ projects } />
        </div>
      </div>
    )
  }
}

export default Projetos;
