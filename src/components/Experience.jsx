import React, { useState, useEffect } from 'react';
import scrollReveal from 'scrollreveal';
import { experienceData } from '../data/experienceData';

export default function Experience() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [experienceList] = useState(experienceData);

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
    <div id="experience" className="p-8 border border-gray-300 rounded-lg my-8 mx-4 md:mx-28">
      <p className="text-xl font-bold mb-4">Experiência Profissional</p>
      <div className="flex flex-wrap justify-center">
        {experienceList.map((experience) => (
          <div key={experience.id} className={`p-4 ${isMobile ? 'mb-4' : 'scroll-reveal'}`}>
            <p className="text-red-500 text-lg font-medium">{experience.company}</p>
            <p className={`text-base ${isMobile ? 'mb-2' : ''}`}>{experience.jobtitle}</p>
            <p className="text-sm opacity-75">{`Ano de Início: ${experience.startYear}`}</p>
            <p className="text-sm opacity-75">
              {typeof experience.endYear === 'string'
                ? 'Este é meu trabalho atual'
                : `Ano de Conclusão: ${experience.endYear}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
