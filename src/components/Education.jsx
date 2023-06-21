import React, { useState, useEffect } from 'react';
import scrollReveal from 'scrollreveal';
import { educationData } from '../data/educationData';

export default function Education() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [education] = useState(educationData);

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
    <div id="education" className="p-8 border border-gray-300 rounded-lg my-8 mx-4 md:mx-28">
      <p className="text-xl font-bold mb-4">Formação</p>
      <p className={`text-green-500 text-lg font-medium ${!isMobile ? 'scroll-reveal' : ''}`}>{education.institution}</p>
      <p className={`text-base ${isMobile ? 'mb-2' : 'scroll-reveal'}`}>{education.course}</p>
      <p className={`text-base ${isMobile ? 'mb-2' : 'scroll-reveal'}`}>{education.description}</p>
      <p className={`text-base ${!isMobile ? 'scroll-reveal' : ''}`}>
        {`Comecei o curso em abril de ${education.startYear} e concluí em maio de ${education.endYear}`}
      </p>
    </div>
  );
}
