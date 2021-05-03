import React from 'react';
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = (props) => {
  const { title, description, img, github, live } = props.singleProject
  return (
    <div className="col-md-4 col-sm-12 serviceCard">
      <div className="single-item my-4">
        <div className="card shadow">
          <img className="card-img-top" src={img} alt={title} />
          <div className="card-body">
            <h4 className="card-title font-weight-bold">{title}</h4>
            <p className="card-text">{description}</p>
            <div className="pt-2">
              <span><a className="text-color mr-3 " href={github} target="/blank"><FontAwesomeIcon className="icon-style" icon={faGithub} /> <span></span></a></span>
              <span><a className="text-color" href={live} target="/blank"><FontAwesomeIcon className="icon-style" icon={faExternalLinkAlt} /> <span></span></a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;