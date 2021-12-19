import React from 'react';
import ProjectCard from '../projectCard';
import PropTypes from 'prop-types';
import './projectList.css'

class ProjectList extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <ul className="projects-list">
        { projects.map((project) => <ProjectCard project={ project } />)}
      </ul>
    )
  }
}

ProjectList.propTypes = {
  projects: PropTypes.shape({
    map: PropTypes.string,
  }).isRequired,
};

export default ProjectList;