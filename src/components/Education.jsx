import React, { useState, useEffect } from 'react';
import scrollReveal from 'scrollreveal';
import { educationData } from '../data/educationData';

export default function Education() {
  const [object] = useState(educationData);

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
    <div id="education" className="p-8 border border-gray-300 rounded-lg my-8 mx-28">
      <p className="text-xl font-bold mb-4">Formação</p>
      <p className="text-green-500 text-lg font-medium scroll-reveal">{object.institution}</p>
      <p className="text-base scroll-reveal">{object.course}</p>
      <p className="text-base scroll-reveal">{object.description}</p>
      <p className="text-base scroll-reveal">
        {`Comecei o curso em abril de ${object.startYear} e concluí em maio de ${object.endYear}`}
      </p>
    </div>
  );
}
