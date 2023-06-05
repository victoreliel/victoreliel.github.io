import React, { useEffect } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import scrollReveal from 'scrollreveal';
import { projectsData } from '../data/projectsData';
import '../styles/Projects.css';

export default function Projects() {
  useEffect(() => {
    scrollReveal().reveal('.scroll-reveal', {
      duration: 500,
      distance: '20px',
      origin: 'bottom',
      easing: 'ease-in-out',
      delay: 100,
      interval: 200,
      reset: true,
    });
  }, []);

  return (
    <div id="projects" className="projects">
      <p className="title">Projetos</p>
      <div className="projects-container scroll-reveal">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <p className="project-name subtitle">{project.name}</p>
            <p className="project-description">{project.description}</p>
            <div className="link">
              <AiOutlineLink />
              <a
                href={project.repository}
                target="_blank"
                className="project-link"
                rel="noreferrer"
              >
                Link do Repositório
              </a>
            </div>
            <div className="link">
              <AiOutlineLink />
              <a
                href={project.demo}
                target="_blank"
                className="project-link"
                rel="noreferrer"
              >
                Demonstração do Projeto
              </a>
            </div>
            <img className="project-image" src={project.image} alt="Imagem do Projeto" />
          </div>
        ))}
      </div>
    </div>
  );
}
