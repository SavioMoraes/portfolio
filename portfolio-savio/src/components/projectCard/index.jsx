import React from 'react';
import PropTypes from 'prop-types';
import './projectCard.css'

class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;
    const { title, name, gitHub, storyline, imagePath } = project;
    return (
      <section className="project-card">
        <a href={`https://saviomoraes.github.io/${name}/`} target="_blank" rel="noreferrer">
          <img src={ imagePath } alt={ title } />
        </a>
        <div className="project-card-body">
          <h4 className="project-card-title">{ title }</h4>
          <h5 className="project-card-git-hub">{ gitHub }</h5>
          <p className="project-card-storyline">{ storyline }</p>
        </div>
      </section>
    )
  }
}

ProjectCard.defaultProps = {
  project: {},
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    gitHub: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
};

export default ProjectCard;