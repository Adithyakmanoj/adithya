import React from 'react'

function Projects() {
    const projects = [
        {
          title: "Project 1",
          description: "Description of project 1",
          technologies: ["React", "Node.js"],
          link: "#"
        },
        {
          title: "Project 2",
          description: "Description of project 2",
          technologies: ["React", "Firebase"],
          link: "#"
        }
      ];
    
      return (
        <div>
          <h2>My Projects</h2>
          <div>
            {projects.map((project, index) => (
              <div key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech} </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Projects
