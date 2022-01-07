import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import './projectCard.css'

class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;
    const { title, name, storyline, imagePath, url, github } = project;
    return (
      <>
        <section className="project-card">
          <a href={ name ? `https://saviomoraes.github.io/${name}/` : url } target="_blank" rel="noreferrer">
            <img className="project-card-image" src={ imagePath } alt={ title } />
          </a>
          <div className="project-card-body">
            <a href={ name ? `https://saviomoraes.github.io/${name}/` : url } target="_blank" rel="noreferrer">
              <h4 className="project-card-title">{ title }</h4>
            </a>
            <a className="link-repo" href={ name ? `https://github.com/SavioMoraes/${name}/` : `https://github.com/SavioMoraes/${github}/` } target="_blank" rel="noreferrer">
            <FontAwesomeIcon className="git-hub-icon" icon={faCodeBranch} />
              <h5 className="project-card-git-hub">código github</h5>
            </a>
            <p className="project-card-storyline">{ storyline }</p>
          </div>
        </section>
      </>
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