import React, { useState } from 'react';
import ProjectData from '../data/ProjectData/ProjectData'
import ProjectCard from '../ProjectCard/ProjectCard';

const Project = () => {
  const [project] = useState(ProjectData)

  return (
    <section id="project" className="py-5">
      <h1 className='text-center font-weight-bold'>PROJECTS</h1>
      <div className="d-flex justify-content-center mt-4">
        <div className="row">
          {
            project.map(singleProject => <ProjectCard singleProject={singleProject} key={singleProject.id}></ProjectCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default Project;