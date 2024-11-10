import React from 'react';
import project1 from '../../assets/project1.png'; 
import './Project.css'; 

function Projects() {
  const projects = [
    {
      title: "Personalized Vacancy Notifier",
      description: "Here the job seekers can register to the system, by providing their educational, professional data. By using this data resume is generated for that particular job seeker. During this process, they are required to enter their qualifications. When a job vendor has a vacancy at is organization, he / she updates the same in this system. Based on the eligibility criteria given in the vacancy details, notifications will be sent only to those job seekers who have acquired the qualifications mentioned before. Also admin can approve or reject companies to avoid fraudulent users from posting fake vacancy details. If an approved company posts fake vacancy details, then admin can directly block their profile. This system is highly recommended, because artificial intelligence is implemented to suggest personalized job vacancies to candidates or job seekers. .",
      technologies: ["Python ", "HTML, XML ","MySQL Serve"],
      image: project1, 
    },
   
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            
            <p>{project.description}</p>
            <div className="technologies">
              <strong>Technologies:</strong>
              <div>
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
