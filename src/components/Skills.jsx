import React, { useEffect, useState } from 'react';
import scrollReveal from 'scrollreveal';
import technologiesIcons from '../helpers/technologies';
import { skillsData } from '../data/skillsData';

export default function Skills() {
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
      origin: 'left',
      easing: 'ease-in-out',
      delay: 100,
      interval: 200,
      reset: true,
    });
  }, []);

  return (
    <div id="skills" className="p-8 border border-gray-300 rounded-lg my-8 mx-4 md:mx-28">
      <p className="text-xl font-bold mb-4">Skills</p>
      <div className={`flex flex-wrap ${isMobile ? 'justify-center' : 'justify-evenly'}`}>
        {skillsData.map((technology) => (
          <div key={technology} className={`m-2 flex items-center ${isMobile ? 'w-1/4' : ''}`}>
            <div className="opacity-80 hover:opacity-100 transition-opacity duration-300">
              {technologiesIcons(technology)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
