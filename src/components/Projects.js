import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2><br></br>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;