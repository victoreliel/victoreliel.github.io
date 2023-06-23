import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import scrollReveal from 'scrollreveal';
import { ThemeContext } from '../context/ThemeContext';
import { projectsData } from '../data/projectsData';
import Header from '../components/Header';

export default function Projects() {
  const { theme } = useContext(ThemeContext);
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
    <div id="projects" className={`projects ${theme === 'light' ? 'light' : 'dark'}`} style={{ height: '100%' }}>
      <Header />
      <div className="p-8 pt-24 mb-0 border border-gray-300 rounded-lg my-8 mx-4 md:mx-28">
        <p className="text-xl font-bold mb-4">Todos os Projetos</p>
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scroll-reveal'} gap-8`}>
          {projectsData.map((project) => (
            <div className="flex flex-col justify-between border border-gray-300 rounded-lg p-4 hover:scale-105 transition-transform" key={project.id}>
              <div>
                <p className="text-lg font-semibold mb-2">{project.name}</p>
                <p className="mb-4">{project.description}</p>
              </div>
              <div className="flex items-center mb-4">
                <AiOutlineLink className="mr-2" />
                <a href={project.repository} target="_blank" rel="noreferrer" className="text-blue-500">
                  Link do Repositório
                </a>
              </div>
              <div className="flex items-center">
                <AiOutlineLink className="mr-2" />
                {project.demo === '' ? <span>Demonstração ainda não disponível</span>
                  : (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-blue-500">
                      Demonstração do Projeto
                    </a>
                  )}
              </div>
              <img className={`w-full h-48 object-cover rounded-lg mt-4 ${isMobile ? 'hidden' : ''}`} src={project.image} alt={project.image === '' ? 'Imagem indisponível' : 'Imagem do Projeto'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
