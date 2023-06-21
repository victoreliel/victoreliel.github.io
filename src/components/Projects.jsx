import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLink } from 'react-icons/ai';
import scrollReveal from 'scrollreveal';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

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
    <div id="projects" className="p-8 border border-gray-300 rounded-lg my-8 mx-4 md:mx-28">
      <p className="text-xl font-bold mb-4">Projetos Principais</p>
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scroll-reveal'} gap-8`}>
        {projectsData.map((project) => (
          <div className="border border-gray-300 rounded-lg p-4 hover:scale-105 transition-transform" key={project.id}>
            <p className="text-lg font-semibold mb-2">{project.name}</p>
            <p className="mb-4">{project.description}</p>
            <div className="flex items-center mb-4">
              <AiOutlineLink className="mr-2" />
              <a href={project.repository} target="_blank" rel="noreferrer" className="text-blue-500">
                Link do Repositório
              </a>
            </div>
            <div className="flex items-center">
              <AiOutlineLink className="mr-2" />
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-blue-500">
                Demonstração do Projeto
              </a>
            </div>
            <img className={`w-full h-48 object-cover rounded-lg mt-4 ${isMobile ? 'hidden' : ''}`} src={project.image} alt="Imagem do Projeto" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
          Ver Todos os Projetos
        </Link>
      </div>
    </div>
  );
}
